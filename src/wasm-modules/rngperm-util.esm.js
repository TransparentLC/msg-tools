/** @type {globalThis} */
const GLOBAL = typeof globalThis !== 'undefined' ? globalThis : (global || self);

const {
    Uint32Array,
    Float32Array,
    WebAssembly,
} = GLOBAL;

const wasmMemory = new WebAssembly.Memory({
    'initial': 1,
});
let wasmHeapU32 = new Uint32Array(wasmMemory.buffer);
let wasmHeapF32 = new Float32Array(wasmMemory.buffer);
/**
 * @param {Number} size
 */
const wasmMemoryAlloc = size => {
    const wasmMemoryLength = wasmMemory.buffer.byteLength;
    if (size <= wasmMemoryLength) return;
    wasmMemory['grow'](Math.ceil((size - wasmMemoryLength) / 65536));
    wasmHeapU32 = new Uint32Array(wasmMemory.buffer);
    wasmHeapF32 = new Float32Array(wasmMemory.buffer);
};

/** @typedef {Number} Pointer */

/** @type {WebAssembly.Exports} */
/**
 * @type {{
 *  g(state: Pointer, perm: Pointer, length: Number) => void,
 *  i(perm: Pointer, length: Number) => void,
 *  c(srcWidth: Number, srcHeight: Number, perm: Pointer, result: Pointer) => void,
 * }}
 */
let wasmExports;

new Promise(resolve => WebAssembly
    .instantiate(
        Uint8Array.from(atob(
            'AGFzbQEAAAABFQNgA39/fwBgAn9/AGAGf39/f39/AAIIAQFlAW0CAAADBAMAAQIHDQMBZwAAAWkAAQFjAAIK9gcDhgMBBX8CQCACRQ0AIAJBAWtBB08EQCACQXhxIQYDQCABIANBAnRqIAM2AgAgASADQQFyIgRBAnRqIAQ2AgAgASADQQJyIgRBAnRqIAQ2AgAgASADQQNyIgRBAnRqIAQ2AgAgASADQQRyIgRBAnRqIAQ2AgAgASADQQVyIgRBAnRqIAQ2AgAgASADQQZyIgRBAnRqIAQ2AgAgASADQQdyIgRBAnRqIAQ2AgAgA0EIaiEDIAVBCGoiBSAGRw0ACwsgAkEHcSIFBEADQCABIANBAnRqIAM2AgAgA0EBaiEDIAdBAWoiByAFRw0ACwsgAkEBayIFQQBIDQADQCAAIAAoAgAiBiAAKAIIcyIEIAAoAgQiA3M2AgQgACADIAAoAgxzIgdBC3c2AgwgACAEIANBCXRzNgIIIAAgBiAHczYCACABIAUiA0ECdGoiBSgCACEEIAUgASAGQQVsQQd3QQlsIAJwQQJ0aiICKAIANgIAIAIgBDYCACADQQFrIQUgAyICQQBKDQALCwt+AQV/IAEEQANAIAAgAkECdGooAgAiBCEDAkAgAiAERwRAA0AgAiADTw0CIAAgA0ECdGooAgAiAyACRw0ACwsgAiEDA0AgACAEQQJ0aiIFKAIAIQYgBSADNgIAIAIgBEchBSAEIQMgBiEEIAUNAAsLIAJBAWoiAiABRw0ACwsL7AMCA38QfSADQQR2IgYgAkEEdiIHbCIIBEBDAACAPyAGsyIUlSABsyIPlCEVQwAAgD8gB7MiFpUgALMiEJQhFyADsyERIAKzIRJBACEBQQAhAANAIAUgAEECdCIDaiICIAQgAUECdGooAgAiBiAGIAduIgYgB2xrQQR0syIJIBKVIgwgDJJDAACAv5IiDDgCACAFIANBBHJqQwAAgD8gBkEEdLMiCiARlSINIA2SkyINOAIAIAUgA0EIcmogASABIAduIgYgB2xrsyAWlSAQlCIOIBCVIhM4AgAgBSADQQxyaiAGsyAUlSAPlCIYIA+VIgs4AgAgBSADQRByaiAJQwAAgEGSIBKVIgkgCZJDAACAv5IiCTgCACAFIANBFHJqIA04AgAgBSADQRhyaiAXIA6SIBCVIg44AgAgBSADQRxyaiALOAIAIAJDAACAPyAKQwAAgEGSIBGVIgogCpKTIgo4AlQgAiAMOAJQIAIgCzgCTCACIA44AkggAkFAayAJOAIAIAIgFSAYkiAPlSILOAI8IAIgDjgCOCACIAo4AjQgAiAJOAIwIAIgCzgCLCACIBM4AiggAiAKOAIkIAIgEzgCWCACIAs4AlwgAiAMOAIgIAIgDTgCRCAAQRhqIQAgAUEBaiIBIAhHDQALCws'
        ), e => e.charCodeAt()),
        {
            'e': {
                'm': wasmMemory,
            },
        }
    )
    .then(result => {
        wasmExports = result['instance']['exports'];
        resolve();
    })
);

/**
 * @param {[Number, Number, Number, Number]} state
 * @param {Number} length
 * @returns {Uint32Array[]}
 */
export const generatePerm = (state, length) => {
    wasmMemoryAlloc(16 + (length << 2));
    wasmHeapU32.set(state, 0);
    wasmExports['g'](0, 16, length);
    return wasmHeapU32.slice(4, 4 + length);
};

/**
 * @param {Number[]} perm
 * @returns {Uint32Array[]}
 */
export const invertPerm = perm => {
    wasmMemoryAlloc(perm.length << 2);
    wasmHeapU32.set(perm);
    wasmExports['i'](0, perm.length);
    return wasmHeapU32.slice(0, perm.length);
};

/**
 * @param {Number} srcWidth
 * @param {Number} srcHeight
 * @param {Number} dstWidth
 * @param {Number} dstHeight
 * @param {Number[]} perm
 * @returns {Float32Array[]}
 */
export const coordArray = (srcWidth, srcHeight, dstWidth, dstHeight, perm) => {
    wasmMemoryAlloc(perm.length * (4 + 96));
    wasmHeapU32.set(perm);
    wasmExports['c'](srcWidth, srcHeight, dstWidth, dstHeight, 0, perm.length << 2);
    return wasmHeapF32.slice(perm.length, perm.length * (1 + 24));
};