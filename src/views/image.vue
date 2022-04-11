<template>
    <div class="text-h5 text-primary mb-2">图片处理</div>
    <v-btn color="primary" block @click="imageInput.click()">
        <v-icon :icon="mdiOpenInNew"></v-icon>打开图片
    </v-btn>
    <template v-if="imageUrl">
        <v-img
            class="my-2"
            max-height="360"
            :src="imageUrl"
            :transition="null"
        ></v-img>
        <v-row dense class="my-2">
            <v-col cols="6">
                <v-btn color="primary" block @click="obfuscateImage(false)">
                    <v-icon :icon="mdiArrangeSendToBack"></v-icon>打乱图片
                </v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn color="primary" block @click="obfuscateImage(true)">
                    <v-icon :icon="mdiArrangeBringToFront"></v-icon>还原图片
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-btn color="primary" block @click="imageSave.click()">
                    <v-icon :icon="mdiFileImageOutline"></v-icon>保存处理后的图片
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="处理参数"
                    color="primary"
                    density="comfortable"
                    v-model="paramsText"
                    hide-details
                    @click="copyParams"
                ></v-text-field>
            </v-col>
        </v-row>
    </template>
    <v-divider class="my-4"></v-divider>
    <div class="text-body-1">
        <p class="my-2">使用<abbr title="xoshiro128**">伪随机数生成算法</abbr>，将图片以 16x16 的小块为单位打乱或还原。</p>
        <p class="my-2">打乱图片前会随机生成种子，和图片的尺寸一起记录为<abbr title="s=<seed>&w=<width>&=<height>">处理参数</abbr>，请将处理参数和打乱后的图片一起发送。反之，输入打乱时使用的处理参数就可以将图片还原了。</p>
        <p class="my-2">在处理前会对图片进行缩放，使其长度和宽度均为 16 的倍数（向下取整）。图片尺寸越大，则混淆/还原需要的时间也会越长。</p>
        <p class="my-2">如果需要还原的图片经过了缩放或压缩，还原后的图片会有格子形状的痕迹，这是正常现象。</p>
    </div>

    <input type="file" ref="imageInput" style="display:none">
    <a :href="imageUrl" ref="imageSave" :download="imageName" style="display:none"></a>
</template>

<script setup>
import { ref, watch, onMounted, getCurrentInstance } from 'vue';
import {
    mdiArrangeBringToFront,
    mdiArrangeSendToBack,
    mdiFileImageOutline,
    mdiOpenInNew,
} from '@mdi/js';
import {
    resizeImage,
    xoshiro128ss,
    generatePerm,
    invertPerm,
} from '../util.js';

const {
    $toast,
} = getCurrentInstance().appContext.config.globalProperties;

const paramsText = ref('');

/** @type {import('vue').Ref<Image>} */
const imageSrc = ref(null);
const imageUrl = ref('');
/** @type {import('vue').Ref<HTMLInputElement>} */
const imageInput = ref(null);
/** @type {import('vue').Ref<HTMLAElement>} */
const imageSave = ref(null);
const imageName = ref('');
watch(imageUrl, (newval, oldval) => URL.revokeObjectURL(oldval) || (imageName.value = Date.now()));
onMounted(() => imageInput.value.onchange = async e => {
    const imageObjectUrl = URL.createObjectURL(e.target.files[0]);
    /** @type {Image} */
    const image = await new Promise((resolve, reject) => {
        const i = new Image;
        i.src = imageObjectUrl;
        i.onload = () => resolve(i);
        i.reject = reject;
    });
    imageUrl.value = (imageSrc.value = image).src;
    URL.revokeObjectURL(imageObjectUrl);
});

const obfuscateCanvas = document.createElement('canvas');
const obfuscateCanvasCtx = obfuscateCanvas.getContext('2d');
/**
 * @param {Boolean} invert
 */
const obfuscateImage = async invert => {
    let width;
    let height;
    let rngState;
    if (invert) {
        const params = new URLSearchParams(paramsText.value);
        if (!(
            ['s', 'w', 'h'].every(e => params.has(e)) &&
            params.get('w').match(/^\d+$/) &&
            params.get('h').match(/^\d+$/) &&
            params.get('s').match(/^[\da-f]{32}$/)
        )) {
            return $toast.warning('请输入有效的处理参数');
        }
        width = parseInt(params.get('w'));
        height = parseInt(params.get('h'));
        rngState = ['a', 'b', 'c', 'd'].reduce((acc, cur, idx) => {
            acc[cur] = parseInt(params.get('s').substring(idx << 3, (idx + 1) << 3), 16);
            return acc;
        }, {});
    } else {
        width = imageSrc.value.width & ~0xF;
        height = imageSrc.value.height & ~0xF;
        const rngSeed = crypto.getRandomValues(new Uint32Array(4));
        rngState = ['a', 'b', 'c', 'd'].reduce((acc, cur, idx) => {
            acc[cur] = rngSeed[idx];
            return acc;
        }, {});
        paramsText.value = (new URLSearchParams([
            ['s', Array.from(rngSeed).map(e => e.toString(16).padStart(8, 0)).join('')],
            ['w', width],
            ['h', height],
        ])).toString();
    }
    const image = await resizeImage(imageSrc.value, width, height);
    const tileWidth = width >> 4;
    const tileHeight = height >> 4;
    obfuscateCanvas.width = width;
    obfuscateCanvas.height = height;
    obfuscateCanvasCtx.clearRect(0, 0, width, height);

    const mapping = generatePerm(tileWidth * tileHeight, xoshiro128ss(rngState));
    if (invert) {
        invertPerm(mapping);
    }

    for (let i = 0; i < mapping.length; i++) {
        const j = mapping[i];
        obfuscateCanvasCtx.drawImage(
            image,
            (i % tileWidth) << 4, ((i / tileWidth) | 0) << 4, 16, 16,
            (j % tileWidth) << 4, ((j / tileWidth) | 0) << 4, 16, 16,
        );
    }

    /** @type {Blob} */
    const blob = await new Promise(resolve => obfuscateCanvas.toBlob(resolve));
    const blobUrl = URL.createObjectURL(blob);
    const imageResult = await new Promise((resolve, reject) => {
        const i = new Image;
        i.src = blobUrl;
        i.onload = () => resolve(i);
        i.onerror = reject;
    });
    imageSrc.value = imageResult;
    imageUrl.value = blobUrl;
};

const copyParams = () => paramsText.value && navigator.clipboard.writeText(paramsText.value).then(() => $toast.info('已将处理参数复制到剪贴板'));
</script>