<template>
    <div class="text-h5 text-primary mb-2">文本处理</div>
    <v-textarea
        v-model="text"
        label="需要处理的文本"
        row="6"
        counter
        no-resize
        hide-details
        color="primary"
        class="my-4"
    ></v-textarea>

    <v-row dense class="my-2">
        <v-col cols="6">
            <v-tooltip top text="请允许读取剪贴板，某些浏览器可能不支持">
                <template #activator="{ props }">
                    <v-btn color="primary" block v-bind="props" @click="pasteFromClipboard">
                        <v-icon :icon="mdiContentPaste"></v-icon>从剪贴板粘贴
                    </v-btn>
                </template>
            </v-tooltip>
        </v-col>
        <v-col cols="6">
            <v-btn color="primary" block @click="copyToClipboard">
                <v-icon :icon="mdiContentCopy"></v-icon>复制到剪贴板
            </v-btn>
        </v-col>
    </v-row>

    <v-tabs
        v-model="tab"
        color="primary"
        show-arrows
        center-active
        class="my-2"
    >
        <v-tab>Base 编码</v-tab>
        <v-tab>文本混淆</v-tab>
        <v-tab>与佛论禅</v-tab>
        <v-tab>消息加密</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="my-2">
        <v-window-item>
            <v-row dense>
                <v-col cols="6" sm="3">
                    <v-btn
                        color="primary"
                        block
                        @click="text = base64Encode(utf8Encoder.encode(text))"
                    >Base64 编码</v-btn>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-btn
                        color="primary"
                        block
                        @click="
                            text.match(/^(?:[A-Za-z\d+/])*(?:[A-Za-z\d+/]{2}==|[A-Za-z\d+/]{3}=)?$/)
                            ? (text = utf8Decoder.decode(base64Decode(text)))
                            : $toast.warning('不是有效的 Base64 数据')
                        "
                    >Base64 解码</v-btn>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-btn
                        color="primary"
                        block
                        @click="text = base85Encode(utf8Encoder.encode(text))"
                    >Base85 编码</v-btn>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-btn
                        color="primary"
                        block
                        @click="
                            text.match(/^[\dA-Za-z!#$%&()*+-;<=>?@^_`{|}~]*$/)
                            ? (text = utf8Decoder.decode(base85Decode(text)))
                            : $toast.warning('不是有效的 Base85 数据')
                        "
                    >Base85 解码</v-btn>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <div class="text-body-1">
                <p class="my-2">Base 系列编码使用可打印字符来表示二进制数据，普遍应用于在处理文本数据的环境下存储和传输二进制数据的场景。</p>
                <p class="my-2">Base64 是最常用的编码方式之一，使用了大小写英文字母、数字及符号 + 和 / 共 64 种字符，每 4 个字符表示 3 个字节的数据。Base85 则是另一种更紧凑的编码方式，使用了更多的符号，每 5 个字符表示 4 个字节的数据。</p>
            </div>
        </v-window-item>
        <v-window-item>
            <v-row dense>
                <v-col cols="6">
                    <v-btn
                        color="primary"
                        block
                        @click="(text = applyLetterObfuscation(text)) && $toast.success('替换成功')"
                    >英文字母替换</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn
                        color="primary"
                        block
                        @click="(text = recoverLetterObfuscation(text)) && $toast.success('恢复成功')"
                    >英文字母恢复</v-btn>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-tooltip top text="每两个字符中间固定添加一个">
                        <template #activator="{ props }">
                            <v-btn
                                color="primary"
                                block
                                v-bind="props"
                                @click="(text = addZeroWidthCharsJoin(text)) && $toast.success('添加成功')"
                            >插入不可见字符（分隔连接）</v-btn>
                        </template>
                    </v-tooltip>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-tooltip top text="每两个字符中间随机添加 0-3 个">
                        <template #activator="{ props }">
                            <v-btn
                                color="primary"
                                block
                                v-bind="props"
                                @click="(text = addZeroWidthCharsRandom(text)) && $toast.success('添加成功')"
                            >插入不可见字符（随机添加）</v-btn>
                        </template>
                    </v-tooltip>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-btn
                        color="primary"
                        block
                        @click="(text = clearZeroWidthChars(text)) && $toast.success('清除成功')"
                    >清除不可见字符</v-btn>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <div class="text-body-1">
                <p class="my-2">文本混淆的目标是在不影响阅读的情况下，避免通过查找字符串的方式直接搜索到敏感词。</p>
                <p class="my-2">对于英文字母，可以用形状相同的希腊字母和西里尔字母替代。另一个更通用的方法则是随机在文本中插入 <code>U+200B</code> 等 Unicode 中的不可见字符。</p>
            </div>
        </v-window-item>
        <v-window-item>
            <v-row dense>
                <v-col cols="12" sm="6">
                    <v-btn
                        color="primary"
                        block
                        @click="tudouEncodeButton"
                    >听佛说宇宙的真谛（编码）</v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-btn
                        color="primary"
                        block
                        @click="tudouDecodeButton"
                    >参悟佛所言的真意（解码）</v-btn>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <div class="text-body-1">
                <p class="my-2">“与佛论禅”是 <a href="https://www.keyfc.net/" target="_blank" rel="noopener noreferrer">KeyFansClub</a> 论坛的用户创造的编码方式，原版工具在<a href="https://www.keyfc.net/bbs/tools/tudoucode.aspx" target="_blank" rel="noopener noreferrer">这里</a>。</p>
                <p class="my-2">编码方式参考自<a href="https://github.com/lersh/TudouCode/blob/master/TudouSharp/Tudou.cs" target="_blank" rel="noopener noreferrer">这里</a>，简单的介绍如下：</p>
                <ol class="my-2 pl-6">
                    <li>预定义两个数组，数组 A 包含 128 个汉字，数组 B 包含 12 个汉字。</li>
                    <li>对文本的 UTF-16 LE 编码使用 <abbr title="Mode: CBC, Key: XDXDtudou@KeyFansClub^_^Encode!! IV: Potato@Key@_@=_= Padding: PKCS #7">AES 算法</abbr>加密。</li>
                    <li>将加密后的每个字节<abbr title="记这个字节为 x，伪代码：((x & 0x80) ? B[random] : '') + A[x & 0x7F]">映射</abbr>到对应的汉字。</li>
                </ol>
                <p class="my-2">这里只支持“佛曰”开头的原版与佛论禅，不支持“如是我闻”开头的压缩版或其它的各种“重制版”“新版”等等。</p>
            </div>
        </v-window-item>
        <v-window-item>
            <v-row dense>
                <v-col cols="12" sm="4">
                    <v-text-field
                        label="自己的私钥"
                        color="primary"
                        density="comfortable"
                        ref="privateKeyElement"
                        :type="privateKeyHidden ? 'password' : 'text'"
                        @focus="privateKeyHidden = false"
                        @blur="privateKeyHidden = true"
                        v-model="privateKeyHex"
                        :rules="[keyValidate]"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field
                        label="自己的公钥（点击复制）"
                        hint="根据私钥自动计算"
                        color="primary"
                        density="comfortable"
                        readonly
                        v-model="publicKeyHex"
                        @click="copyPublicKey"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field
                        label="对方的公钥"
                        color="primary"
                        density="comfortable"
                        ref="otherKeyElement"
                        v-model="otherKeyHex"
                        :rules="[keyValidate]"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-btn color="primary" block @click="generateKeyPair">生成密钥对</v-btn>
                </v-col>
                <v-col cols="6" sm="4">
                    <v-btn color="primary" block @click="encryptText">消息加密</v-btn>
                </v-col>
                <v-col cols="6" sm="4">
                    <v-btn color="primary" block @click="decryptText">消息解密</v-btn>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <div class="text-body-1">
                <p class="my-2">一种简单的聊天消息文本端对端加密体制。双方生成密钥对后，将自己的公钥发给对方，并在这里填入对方的公钥，即可开始以加密的方式交换信息。密钥对格式均为 <code>/^[\da-f]{64}$/</code>。</p>
                <ol class="my-2 pl-6">
                    <li>使用 X25519 椭圆曲线算法进行密钥交换，得到 32 字节的共享密钥。考虑到我们可以相信聊天时对方为本人且消息不会被篡改，因此对公钥进行的签名验证被省略了。</li>
                    <li>对共享密钥使用 <abbr title="Salt: akarin.dev, Iteration: 65536">PBKDF2-SHA256 算法</abbr>扩展为 64 字节。</li>
                    <li>使用 ChaCha20-Poly1305 算法对消息进行加密。扩展后密钥的前 32 字节作为密钥，后 32 字节作为验证用的附加数据。每次加密时另外生成 12 字节的随机数。</li>
                    <li>加密后的消息按照顺序由 12 字节的随机数、16 字节的认证码和加密后的消息正文组成，最后使用 Base85 进行编码。</li>
                </ol>
                <p class="my-2">这套体制尝试实现前向保密，因此<strong>密钥对需要随用随弃</strong>。只要不泄露临时使用的私钥，即使将加密后的聊天记录公开（无论是主动或被动），他人也无法获得消息的明文内容。<strong>加密操作全部在前端完成，本工具不会保存或上传你的密钥对及消息内容。</strong></p>
                <p class="my-2">如果你需要一个更加安全的加密方案，可以考虑使用 <a href="https://zh.wikipedia.org/wiki/PGP" target="_blank" rel="noopener noreferrer">PGP</a>。但是 PGP 不支持前向保密，私钥将被长期使用且需要小心保护，否则被截获的所有通信内容都可以使用泄漏的私钥解密。另一个缺点是，一条带有签名的 PGP 加密消息实在是太长了……即使是最短的消息也会占据你的大半个手机屏幕。</p>
            </div>
        </v-window-item>
    </v-window>
</template>

<script setup>
import { ref, computed, watch, nextTick, getCurrentInstance } from 'vue';
import {
    mdiContentCopy,
    mdiContentPaste,
} from '@mdi/js';
import { X25519 } from '../wasm-modules/c25519-wasm.speed.esm.min.js';
import ChaCha20Poly1305 from '../wasm-modules/c20p1305-wasm.speed.esm.min.js';
import pbkdf2Sha256 from '../wasm-modules/pbkdf2-sha256-wasm.speed.esm.min.js';
import {
    utf8Encoder,
    utf8Decoder,
    base64Encode,
    base64Decode,
    base85Encode,
    base85Decode,
    applyLetterObfuscation,
    recoverLetterObfuscation,
    addZeroWidthCharsJoin,
    addZeroWidthCharsRandom,
    clearZeroWidthChars,
    tudouEncode,
    tudouDecode,
randomChoice,
bytesToHex,
hexToBytes,
} from '../util.js';

const {
    $toast,
} = getCurrentInstance().appContext.config.globalProperties;

const tab = ref(null);
const text = ref('');

const pasteFromClipboard = () => navigator.clipboard.readText
    ? navigator.clipboard.readText().then(e => text.value = e)
    : $toast.error('你的浏览器不支持读取剪贴板数据，请手动在文本框中粘贴');
const copyToClipboard = () => navigator.clipboard.writeText(text.value).then(() => $toast.success('已复制到剪贴板'));

const foyu = [
    '命由己造，相由心生',
    '心不动，万物皆不动',
    '心不变，万物皆不变',
    '坐亦禅，行亦禅',
    '一花一世界，一叶一如来',
    '春来花自青，秋至叶飘零',
    '无穷般若心自在，语默动静体自然',
    '悠然，随心，随性，随缘',
    '刹那便是永恒',
    '无悲无喜无梦无幻，无爱无恨四大皆空',
    '不能了，不能悟，不能舍，不能弃',
    '参不透，舍不得',
    '不可说，不可说，一说即是错',
    '一念愚即般若绝，一念智即般若生',
    '菩提本无树，明镜亦非台',
    '本来无一物，何处惹尘埃',
    '一即一切，一切即一',
    '刹那便是永恒',
    '种如是因，收如是果，一切唯心造',
    '人无善恶，善恶存乎尔心',
];

const tudouEncodeButton = () => {
    text.value = tudouEncode(text.value);
    $toast.success(randomChoice(foyu) + '（编码成功）');
};
const tudouDecodeButton = () => {
    try {
        text.value = tudouDecode(text.value);
        $toast.success(randomChoice(foyu) + '（解码成功）');
    } catch (error) {
        $toast.error('太深奥了，参悟不出佛经的真意……（请检查文本是否正确）');
        console.log(error);
    }
};


const keyValidate = v => !!v.match(/^[\da-f]{64}$/) || '密钥格式错误';
/** @type {import('vue').Ref<Uint8Array>} */
const privateKey = ref(null);
const privateKeyHex = ref('');
const privateKeyElement = ref(null);
const privateKeyHidden = ref(true);
watch(privateKeyHex, newval => nextTick(() => privateKeyElement.value.validate().then(e => e.length || (privateKey.value = hexToBytes(newval)))));
const publicKeyHex = computed(() => privateKey.value ? bytesToHex(X25519.getPublic(privateKey.value)) : null);
/** @type {import('vue').Ref<Uint8Array>} */
const otherKey = ref(null);
const otherKeyHex = ref('');
const otherKeyElement = ref(null);
watch(otherKeyHex, newval => nextTick(() => otherKeyElement.value.validate().then(e => e.length || (otherKey.value = hexToBytes(newval)))));
const sharedKey = computed(() => privateKey.value && otherKey.value ? X25519.getShared(privateKey.value, otherKey.value) : null);

const pbkdf2Salt = utf8Encoder.encode('akarin.dev');
const pbkdf2Iteration = 65536;
const generateKeyPair = () => privateKeyHex.value = bytesToHex(privateKey.value = crypto.getRandomValues(new Uint8Array(32)));
const encryptText = () => {
    if (!sharedKey.value) {
        return $toast.warning('请输入有效的密钥');
    }
    const t = performance.now();
    const shared = pbkdf2Sha256(sharedKey.value, pbkdf2Salt, pbkdf2Iteration, 64);
    const nonce = crypto.getRandomValues(new Uint8Array(12));
    const ctx = new ChaCha20Poly1305(shared.subarray(0, 32), nonce, shared.subarray(32, 64));
    const encrypted = ctx.encrypt(utf8Encoder.encode(text.value));
    const concatted = new Uint8Array(encrypted.length + 12 + 16);
    concatted.set(nonce);
    concatted.set(ctx.mac(), 12);
    concatted.set(encrypted, 12 + 16);
    text.value = base85Encode(concatted);
    $toast.success(`加密成功，耗时：${Math.round((performance.now() - t) * 100) / 100}ms`);
};
const decryptText = () => {
    if (!sharedKey.value) {
        return $toast.warning('请输入有效的密钥');
    }
    const t = performance.now();
    const concatted = base85Decode(text.value);
    const nonce = concatted.subarray(0, 12);
    const mac = concatted.subarray(12, 12 + 16);
    const encrypted = concatted.subarray(12 + 16);
    /** @type {Uint8Array} */
    const shared = pbkdf2Sha256(sharedKey.value, pbkdf2Salt, pbkdf2Iteration, 64);
    const ctx = new ChaCha20Poly1305(shared.subarray(0, 32), nonce, shared.subarray(32, 64));
    const decrypted = ctx.decrypt(encrypted);
    if (!ctx.verify(mac)) {
        return $toast.error('解密失败，请检查密钥及密文是否正确且保持完整未被篡改');
    }
    text.value = utf8Decoder.decode(decrypted);
    $toast.success(`解密成功，耗时：${Math.round((performance.now() - t) * 100) / 100}ms`);
};
const copyPublicKey = () => publicKeyHex.value && navigator.clipboard.writeText(publicKeyHex.value).then(() => $toast.info('已将公钥复制到剪贴板'));

</script>