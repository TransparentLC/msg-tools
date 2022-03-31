export class X25519 {
    static getPublic(privateKey: Uint8Array): Uint8Array
    static getShared(privateKey: Uint8Array, publicKey: Uint8Array): Uint8Array
    static ready: Promise<void>
}

export class Ed25519 {
    static getPublic(privateKey: Uint8Array): Uint8Array
    static sign(message: Uint8Array, privateKey: Uint8Array): Uint8Array
    static verify(message: Uint8Array, sign: Uint8Array, publicKey: Uint8Array): Boolean
    static ready: Promise<void>
}
