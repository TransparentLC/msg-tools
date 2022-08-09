#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

// emcc rngperm-util.c -O3 -v -s SIDE_MODULE=2 -o rngperm-util.wasm
// wasm-dis rngperm-util.wasm -o rngperm-util.wat
// wasm-opt -all -O3 --remove-unused-module-elements -o rngperm-util.wasm rngperm-util.wat

// https://stackoverflow.com/questions/521295#answer-47593316
uint32_t xoshiro128ss(uint32_t state[4]) {
    uint32_t t = state[1] << 9;
    uint32_t r = state[0] * 5;
    r = (r << 7 | r >> 25) * 9;
    state[2] ^= state[0];
    state[3] ^= state[1];
    state[1] ^= state[2];
    state[0] ^= state[3];
    state[2] ^= t;
    state[3] = state[3] << 11 | state[3] >> 21;
    return r;
}

EMSCRIPTEN_KEEPALIVE
void generatePerm(uint32_t state[4], uint32_t perm[], const size_t length) {
    for (size_t i = 0; i < length; i++) {
        perm[i] = i;
    }
    for (int32_t i = length - 1; i >= 0; i--) {
        size_t j = xoshiro128ss(state) % (i + 1);
        uint32_t temp = perm[i];
        perm[i] = perm[j];
        perm[j] = temp;
    }
}

EMSCRIPTEN_KEEPALIVE
void invertPerm(uint32_t perm[], const size_t length) {
    for (uint32_t i = 0; i < length; i++) {
        bool skip = false;
        for (uint32_t c = perm[i]; c != i; c = perm[c]) {
            if (c <= i) {
                skip = true;
                break;
            }
        }
        if (skip) {
            continue;
        }
        uint32_t from = i;
        uint32_t to = perm[i];
        do {
            uint32_t temp = perm[to];
            perm[to] = from;
            from = to;
            to = temp;
        } while (from != i);
    }
}

EMSCRIPTEN_KEEPALIVE
void coordArray(
    const size_t srcWidth, const size_t srcHeight,
    const size_t dstWidth, const size_t dstHeight,
    const uint32_t perm[], float result[]
) {
    const size_t tileWidth = dstWidth >> 4;
    const size_t tileHeight = dstHeight >> 4;
    const size_t permLength = tileWidth * tileHeight;
    const float m = 1.0f / tileWidth * srcWidth;
    const float n = 1.0f / tileHeight * srcHeight;
    for (size_t i = 0, offset = 0; i < permLength; i++, offset += 24) {
        const size_t j = perm[i];
        const float srcx = (float)(i % tileWidth) / tileWidth * srcWidth;
        const float srcy = (float)(i / tileWidth) / tileHeight * srcHeight;
        const float dstx = (j % tileWidth) << 4;
        const float dsty = (j / tileWidth) << 4;
        // const coordPos = (x, y, w, h) = > [x / w * 2 - 1, 1 - y / h * 2];
        // const coordUV = (x, y, w, h) = > [x / w, y / h];
        // const coordTL = [...coordPos(dstx,      dsty,      width, height), ...coordUV(srcx,     srcy,     image.width, image.height)];
        // const coordTR = [...coordPos(dstx + 16, dsty,      width, height), ...coordUV(srcx + m, srcy,     image.width, image.height)];
        // const coordBL = [...coordPos(dstx,      dsty + 16, width, height), ...coordUV(srcx,     srcy + n, image.width, image.height)];
        // const coordBR = [...coordPos(dstx + 16, dsty + 16, width, height), ...coordUV(srcx + m, srcy + n, image.width, image.height)];
        // data.push(
        //     ...coordTL, ...coordTR, ...coordBL,
        //     ...coordBR, ...coordTR, ...coordBL,
        // );
        // coordTL
        result[offset +  0] = dstx / dstWidth * 2 - 1;
        result[offset +  1] = 1 - dsty / dstHeight * 2;
        result[offset +  2] = srcx / srcWidth;
        result[offset +  3] = srcy / srcHeight;
        // coordTR
        result[offset +  4] = (dstx + 16) / dstWidth * 2 - 1;
        result[offset +  5] = result[offset + 1];
        result[offset +  6] = (srcx + m) / srcWidth;
        result[offset +  7] = result[offset + 3];
        // coordBL
        result[offset +  8] = result[offset + 0];
        result[offset +  9] = 1 - (dsty + 16) / dstHeight * 2;
        result[offset + 10] = result[offset + 2];
        result[offset + 11] = (srcy + n) / srcHeight;
        // coordBR
        result[offset + 12] = result[offset + 4];
        result[offset + 13] = result[offset + 9];
        result[offset + 14] = result[offset + 6];
        result[offset + 15] = result[offset + 11];
        // coordTR
        result[offset + 16] = result[offset + 4];
        result[offset + 17] = result[offset + 5];
        result[offset + 18] = result[offset + 6];
        result[offset + 19] = result[offset + 7];
        // coordBL
        result[offset + 20] = result[offset + 8];
        result[offset + 21] = result[offset + 9];
        result[offset + 22] = result[offset + 10];
        result[offset + 23] = result[offset + 11];
    }
}