export = class ChaCha20Poly1305 {
    constructor(key: Uint8Array, nonce: Uint8Array, aad: Uint8Array)
    encrypt(data: Uint8Array): Uint8Array
    decrypt(data: Uint8Array): Uint8Array
    mac(): Uint8Array
    verify(mac: Uint8Array): Boolean
    static ready: Promise<void>
}
