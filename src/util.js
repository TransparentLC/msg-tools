import AES256 from './wasm-modules/aes256-wasm.esm.min.js';

export const utf8Encoder = new TextEncoder;
export const utf8Decoder = new TextDecoder;

const base85Chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~';
/** @type {Record<String, Number>} */
const base85CharsReverse = base85Chars.split('').reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
}, {});

/** @type {Record<String, String>} */
const obfuscateLetters = {
    A: 'ΑА',
    B: 'ΒⲂВ',
    C: 'ϹⲤС',
    E: 'ΕЕ',
    H: 'ΗНН',
    I: 'ӀΙӏ',
    J: 'Ϳ',
    K: 'ΚⲔК',
    M: 'ΜϺМ',
    N: 'ΝⲚ',
    O: 'ΟО',
    P: 'ΡⲢР',
    Q: 'Ԛ',
    T: 'ΤТ',
    V: 'Ѵ',
    W: 'Ԝ',
    X: 'ΧⲬХ',
    Y: 'ΥⲨҮ',
    Z: 'Ζ',
    a: 'а',
    c: 'ϲс',
    d: 'ԁ',
    e: 'е',
    i: 'і',
    j: 'ϳј',
    o: 'οо',
    p: 'р',
    q: 'ԛ',
    s: 'ѕ',
    v: 'νѵ',
    w: 'ԝ',
    x: 'х',
    y: 'у',
};
/** @type {Record<String, String>} */
const obfuscateLettersReverse = Object.entries(obfuscateLetters).reduce((acc, [k, v]) => {
    for (const e of v) acc[e] = k;
    return acc;
}, {});

const zeroWidthChars = '\u200b\u200c\u200d\u200e\u202a\u202c\u202d\ufeff';

const tudouChars = '滅苦婆娑耶陀跋多漫都殿悉夜爍帝吉利阿無南那怛喝羯勝摩伽謹波者穆僧室藝尼瑟地彌菩提蘇醯盧呼舍佛參沙伊隸麼遮闍度蒙孕薩夷迦他姪豆特逝朋輸楞栗寫數曳諦羅曰咒即密若般故不實真訶切一除能等是上明大神知三藐耨得依諸世槃涅竟究想夢倒顛離遠怖恐有礙心所以亦智道。集盡死老至';
/** @type {Record<String, Number>} */
const tudouCharsReverse = tudouChars.split('').reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
}, {});
const tudouKeywordChars = '冥奢梵呐俱哆怯諳罰侄缽皤';
const tudouAES = new AES256(utf8Encoder.encode('XDXDtudou@KeyFansClub^_^Encode!!'), utf8Encoder.encode('Potato@Key@_@=_='));

/**
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
export const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * @param {Uint8Array} data
 * @returns {String}
 */
export const base64Encode = data => btoa(String.fromCharCode.apply(null, data));

/**
 * @param {String} data
 * @returns {Uint8Array}
 */
export const base64Decode = data => new Uint8Array(atob(data).split('').map(e => e.charCodeAt()));

/**
 * @param {Uint8Array} data
 * @returns {String}
 */
export const base85Encode = data => {
    const paddingLength = 4 - (data.length % 4 || 4);
    const paddedData = new Uint8Array(data.length + paddingLength);
    paddedData.set(data);
    let result = '';
    for (let i = 0; i < paddedData.length; i += 4) {
        let group4 = 0;
        for (let j = 0; j < 4; j++) {
            group4 |= paddedData[i + j] << ((3 - j) << 3);
            group4 >>>= 0;
        }
        let part85 = '';
        for (let j = 0; j < 5; j++) {
            let k = group4 % 85;
            group4 = (group4 - k) / 85;
            part85 = base85Chars[k] + part85;
        }
        result += part85;
    }
    return result.substring(0, result.length - paddingLength);
};

/**
 * @param {String} data
 * @returns {Uint8Array}
 */
export const base85Decode = data => {
    const paddingLength = 5 - (data.length % 5 || 5);
    data += '~'.repeat(paddingLength);
    const result = new Uint8Array(data.length / 5 * 4 - paddingLength);
    for (let i = 0, j = 0; i < data.length; i += 5, j += 4) {
        let group5 = 0;
        let base = 52200625; // 85 ** 4
        for (let k = 0; k < 5; k++) {
            group5 += base * base85CharsReverse[data[i + k]];
            base /= 85;
        }
        for (let k = 0; k < 4; k++) {
            result[j + k] = group5 >> ((3 - k) << 3);
        }
    }
    return result;
};

/**
 * @param {String} data
 * @returns {Uint8Array}
 */
export const utf16leEncode = data => {
    const result = new Uint8Array(data.length * 2);
    for (let i = 0; i < data.length; i++) {
        const c = data.charCodeAt(i);
        result[i << 1] = c;
        result[(i << 1) + 1] = c >> 8;
    }
    return result;
};

/**
 * @param {Uint8Array} data
 * @returns {String}
 */
export const utf16leDecode = data => {
    let result = '';
    for (let i = 0; i < data.length; i += 2) {
        result += String.fromCharCode(data[i] | (data[i + 1] << 8));
    }
    return result;
};

/**
 * @param {Uint8Array} data
 * @returns {String}
 */
export const bytesToHex = data => {
    let result = '';
    for (let i = 0; i < data.length; i++) {
        result += data[i].toString(16).padStart(2, 0);
    }
    return result;
};

/**
 * @param {String} data
 * @returns {Uint8Array}
 */
export const hexToBytes = data => {
    const splitted = data.match(/[\da-f]{2}/ig);
    const splittedLength = splitted.length;
    const result = new Uint8Array(splittedLength);
    for (let i = 0; i < splittedLength; i++) {
        result[i] = parseInt(splitted[i], 16);
    }
    return result;
};

/**
 * @param {String} data
 * @param {String}
 */
export const applyLetterObfuscation = data => {
    for (const [k, v] of Object.entries(obfuscateLetters)) {
        data = data.replace(new RegExp(k, 'g'), randomChoice(v));
    }
    return data;
};

/**
 * @param {String} data
 * @param {String}
 */
export const recoverLetterObfuscation = data => {
    for (const [k, v] of Object.entries(obfuscateLettersReverse)) {
        data = data.replace(new RegExp(k, 'g'), v);
    }
    return data;
};

/**
 * @param {String} data
 * @param {String}
 */
export const addZeroWidthCharsJoin = data => {
    let result = '';
    for (let i = 0; i < data.length; i++) {
        if (i) result += randomChoice(zeroWidthChars);
        result += data[i];
    }
    return result;
};

/**
 * @param {String} data
 * @param {String}
 */
export const addZeroWidthCharsRandom = data => {
    let result = '';
    for (let i = 0; i < data.length; i++) {
        if (i) {
            const k = Math.floor(Math.random() * 4);
            for (let j = 0; j < k; j++) {
                result += randomChoice(zeroWidthChars);
            }
        }
        result += data[i];
    }
    return result;
};

/**
 * @param {String} data
 * @param {String}
 */
export const clearZeroWidthChars = data => data.replace(new RegExp(`[${zeroWidthChars}]`, 'g'), '');

/**
 * @param {String} data
 * @param {String}
 */
export const tudouEncode = data => {
    let result = '佛曰：';
    const encoded = tudouAES.encrypt(
        AES256.MODE_CBC,
        AES256.utils.pkcs7Pad(utf16leEncode(data)),
    );
    for (let i = 0; i < encoded.length; i++) {
        const e = encoded[i];
        if (e >> 7) {
            result += randomChoice(tudouKeywordChars) + tudouChars[e & 0x7F];
        } else {
            result += tudouChars[e];
        }
    }
    return result;
};

/**
 * @param {String} data
 * @param {String}
 */
export const tudouDecode = data => {
    if (!data.match(new RegExp(`^佛曰：(([${tudouKeywordChars}]?[${tudouChars}]){16})*$`))) {
        throw new Error;
    }
    data = data.substring(3);
    const decodeBuffer = [];
    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        if (tudouKeywordChars.includes(e)) {
            i++;
            decodeBuffer.push(tudouCharsReverse[data[i]] | 0x80);
        } else {
            decodeBuffer.push(tudouCharsReverse[e]);
        }
    }
    return utf16leDecode(AES256.utils.pkcs7Strip(tudouAES.decrypt(AES256.MODE_CBC, new Uint8Array(decodeBuffer))));
};