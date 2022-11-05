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
        ></v-img>
        <v-row dense class="my-2">
            <template v-if="processing">
                <v-col cols="12">
                    <div class="d-flex justify-center align-center">
                        <v-progress-circular
                            indeterminate
                            color="primary"
                            class="mr-2"
                        ></v-progress-circular>
                        <span class="text-medium-emphasis">处理中……</span>
                    </div>
                </v-col>
            </template>
            <template v-else>
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
                        class="flex-grow mr-2"
                    >
                        <template #append>
                            <v-btn
                                color="primary"
                                variant="text"
                                @click="copyParams"
                            >复制</v-btn>
                        </template>
                    </v-text-field>
                </v-col>
            </template>
        </v-row>
    </template>
    <v-divider class="my-4"></v-divider>
    <div class="text-body-1">
        <p class="my-2">使用<abbr title="xoshiro128**">伪随机数生成算法</abbr>，将图片以 16x16 的小块为单位打乱或还原。</p>
        <p class="my-2">打乱图片前会随机生成种子，和图片的尺寸（向下取整为 16 的倍数）一起记录为<abbr title="s=<seed>&w=<width>&=<height>">处理参数</abbr>，请将处理参数和打乱后的图片一起发送。反之，输入打乱时使用的处理参数就可以将图片还原了。</p>
        <p class="my-2">为了保证处理速度，混淆/还原操作是使用 WebAssembly 和 WebGL 实现的。在桌面端处理一张 2560x1920 的图片的耗时为 500ms 左右。</p>
        <p class="my-2">如果对打乱后的图片进行了额外的缩放或压缩，还原后的图片会有格子形状的痕迹，这是正常现象。</p>
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
    generatePerm,
    invertPerm,
    coordArray,
} from '../util.js';

const {
    $toast,
} = getCurrentInstance().appContext.config.globalProperties;

const paramsText = ref('');
const processing = ref(false);

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
    URL.revokeObjectURL(imageUrl.value);
    const imageObjectUrl = URL.createObjectURL(e.target.files[0]);
    /** @type {Image} */
    const image = await new Promise((resolve, reject) => {
        const i = new Image;
        i.src = imageObjectUrl;
        i.onload = () => resolve(i);
        i.reject = reject;
    });
    imageUrl.value = (imageSrc.value = image).src;
});

const obfuscateCanvas = document.createElement('canvas');
const obfuscateCanvasWebGL = obfuscateCanvas.getContext('webgl');
const vertexShader = obfuscateCanvasWebGL.createShader(obfuscateCanvasWebGL.VERTEX_SHADER);
const fragmentShader = obfuscateCanvasWebGL.createShader(obfuscateCanvasWebGL.FRAGMENT_SHADER);
const program = obfuscateCanvasWebGL.createProgram();
// precision mediump float;
// attribute vec2 a_Position;
// attribute vec2 a_Uv;
// varying vec2 v_Uv;
// void main(){
//     gl_Position = vec4(a_Position, 0, 1);
//     v_Uv = a_Uv;
// }
obfuscateCanvasWebGL.shaderSource(vertexShader, 'precision mediump float;attribute vec2 a_Position;attribute vec2 a_Uv;varying vec2 v_Uv;void main(){gl_Position=vec4(a_Position,0,1);v_Uv=a_Uv;}');
obfuscateCanvasWebGL.compileShader(vertexShader);
// precision mediump float;
// uniform sampler2D u_Texture;
// varying vec2 v_Uv;
// void main(){
//     gl_FragColor = texture2D(u_Texture, v_Uv);
//     gl_FragColor.rgb *= gl_FragColor.a;
// }
obfuscateCanvasWebGL.shaderSource(fragmentShader, 'precision mediump float;uniform sampler2D u_Texture;varying vec2 v_Uv;void main(){gl_FragColor=texture2D(u_Texture,v_Uv);gl_FragColor.rgb*=gl_FragColor.a;}');
obfuscateCanvasWebGL.compileShader(fragmentShader);
obfuscateCanvasWebGL.attachShader(program, vertexShader);
obfuscateCanvasWebGL.attachShader(program, fragmentShader);
obfuscateCanvasWebGL.linkProgram(program);
obfuscateCanvasWebGL.useProgram(program);
const u_Texture = obfuscateCanvasWebGL.getUniformLocation(program, 'u_Texture');
const a_Position = obfuscateCanvasWebGL.getAttribLocation(program, 'a_Position');
const a_Uv = obfuscateCanvasWebGL.getAttribLocation(program, 'a_Uv');
obfuscateCanvasWebGL.enableVertexAttribArray(a_Position);
obfuscateCanvasWebGL.enableVertexAttribArray(a_Uv);
const buffer = obfuscateCanvasWebGL.createBuffer();
obfuscateCanvasWebGL.bindBuffer(obfuscateCanvasWebGL.ARRAY_BUFFER, buffer);
obfuscateCanvasWebGL.vertexAttribPointer(a_Position, 2, obfuscateCanvasWebGL.FLOAT, false, 16, 0);
obfuscateCanvasWebGL.vertexAttribPointer(a_Uv, 2, obfuscateCanvasWebGL.FLOAT, false, 16, 8);
const texture = obfuscateCanvasWebGL.createTexture();
obfuscateCanvasWebGL.activeTexture(obfuscateCanvasWebGL.TEXTURE0);
obfuscateCanvasWebGL.bindTexture(obfuscateCanvasWebGL.TEXTURE_2D, texture);
obfuscateCanvasWebGL.texParameteri(obfuscateCanvasWebGL.TEXTURE_2D, obfuscateCanvasWebGL.TEXTURE_MAG_FILTER, obfuscateCanvasWebGL.LINEAR);
obfuscateCanvasWebGL.texParameteri(obfuscateCanvasWebGL.TEXTURE_2D, obfuscateCanvasWebGL.TEXTURE_MIN_FILTER, obfuscateCanvasWebGL.LINEAR);
obfuscateCanvasWebGL.texParameteri(obfuscateCanvasWebGL.TEXTURE_2D, obfuscateCanvasWebGL.TEXTURE_WRAP_S, obfuscateCanvasWebGL.CLAMP_TO_EDGE);
obfuscateCanvasWebGL.texParameteri(obfuscateCanvasWebGL.TEXTURE_2D, obfuscateCanvasWebGL.TEXTURE_WRAP_T, obfuscateCanvasWebGL.CLAMP_TO_EDGE);
obfuscateCanvasWebGL.uniform1i(u_Texture, 0);

/**
 * @param {Boolean} invert
 */
const obfuscateImage = async invert => {
    const t = performance.now();

    let width;
    let height;
    let rngSeed;
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
        rngSeed = new Uint32Array([0, 1, 2, 3].map(e => parseInt(params.get('s').substring(e << 3, (e + 1) << 3), 16)));
    } else {
        width = imageSrc.value.width & ~0xF;
        height = imageSrc.value.height & ~0xF;
        rngSeed = crypto.getRandomValues(new Uint32Array(4));
        paramsText.value = (new URLSearchParams([
            ['s', Array.from(rngSeed).map(e => e.toString(16).padStart(8, 0)).join('')],
            ['w', width],
            ['h', height],
        ])).toString();
    }

    processing.value = true;
    const tileWidth = width >> 4;
    const tileHeight = height >> 4;
    let mapping = generatePerm(rngSeed, tileWidth * tileHeight);
    // console.log([...mapping]);
    if (invert) {
        mapping = invertPerm(mapping);
        // console.log([...mapping]);
    }

    const image = imageSrc.value;
    const coord = coordArray(image.width, image.height, width, height, mapping);
    obfuscateCanvasWebGL.texImage2D(obfuscateCanvasWebGL.TEXTURE_2D, 0, obfuscateCanvasWebGL.RGBA, obfuscateCanvasWebGL.RGBA, obfuscateCanvasWebGL.UNSIGNED_BYTE, image);
    obfuscateCanvasWebGL.bufferData(obfuscateCanvasWebGL.ARRAY_BUFFER, coord, obfuscateCanvasWebGL.STATIC_DRAW);
    obfuscateCanvas.width = width;
    obfuscateCanvas.height = height;
    obfuscateCanvasWebGL.viewport(0, 0, obfuscateCanvas.width, obfuscateCanvas.height);
    obfuscateCanvasWebGL.drawArrays(obfuscateCanvasWebGL.TRIANGLES, 0, coord.length >> 2);
    /** @type {Blob} */
    const blob = await new Promise(resolve => obfuscateCanvas.toBlob(resolve));
    const blobUrl = URL.createObjectURL(blob);
    imageSrc.value = await new Promise((resolve, reject) => {
        const i = new Image;
        i.src = blobUrl;
        i.onload = () => resolve(i);
        i.onerror = reject;
    });;
    imageUrl.value = blobUrl;

    processing.value = false;

    $toast.success(`处理成功，耗时：${Math.round((performance.now() - t) * 100) / 100}ms`);
};

const copyParams = () => paramsText.value && navigator.clipboard.writeText(paramsText.value).then(() => $toast.info('已将处理参数复制到剪贴板'));
</script>