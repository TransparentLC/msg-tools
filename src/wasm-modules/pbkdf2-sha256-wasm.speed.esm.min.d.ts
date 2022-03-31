declare const pbkdf2Sha256: {
    (key: Uint8Array, salt: Uint8Array, rounds: Number, derivedKeyLength: Number): Uint8Array
    ready: Promise<void>
}

export = pbkdf2Sha256;