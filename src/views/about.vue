<template>
    <div class="text-h5 text-primary">关于</div>
    <div class="text-body-1">
        <p class="my-2">对聊天中的文本和图片消息进行处理的在线工具。</p>
        <p class="my-2">如果你使用的浏览器支持，可以通过安装 PWA 应用的方式离线使用。</p>
        <p class="my-2">提供这个工具是因为它可能会有用，但本工具不提供任何类型的担保。在使用前，你有责任保证使用本工具处理的内容符合相关的法律法规，本工具不对处理内容的合法性负责。<strong>如果你无法确认这一点，请不要使用这个工具。</strong></p>
        <p class="my-2">这个工具使用了一些安全性被广泛认可（截止至编写时）的密码学算法，但本工具对这些算法的应用仍然可能存在安全缺陷。</p>
        <p class="my-2">前端界面使用 <a class="text-secondary" href="https://next.vuetifyjs.com" target="_blank" rel="noopener noreferrer">Vuetify 3</a> 编写，由于这个框架仍处于 Beta 状态，因此可能会出现一些缺陷。</p>
    </div>
    <div class="text-h5 text-primary">隐私声明</div>
    <div class="text-body-1">
        <p class="my-2">本工具不会将处理的消息内容保存或发送给第三方。</p>
        <p class="my-2">除了打开页面时需要加载的静态资源，在使用本工具期间不会发出任何网络请求。</p>
    </div>
    <div class="text-h5 text-primary">开发者</div>
    <div class="text-body-1">
        <v-card class="d-flex align-center my-2 pa-2">
            <v-avatar size="large" class="mr-2">
                <v-img src="https://avatars.githubusercontent.com/u/47057319?s=128"></v-img>
            </v-avatar>
            <div class="d-flex flex-column">
                <div>✨小透明・宸✨</div>
                <div class="text-caption text-medium-emphasis"><a class="text-secondary" href=" https://github.com/TransparentLC" target="_blank" rel="noopener noreferrer">https://github.com/TransparentLC</a></div>
            </div>
        </v-card>
        <p class="my-2">你可以在<a class="text-secondary" href="https://github.com/TransparentLC/msg-tools" target="_blank" rel="noopener noreferrer">这里</a>查看源代码。</p>
        <p class="my-2" v-for="item, index in badges" :key="index">
            <small
                class="py-1 px-2"
                style="color:#fff;border-radius:3px 0 0 3px;background-color:#555"
            >{{ item.label }}</small>
            <small
                class="py-1 px-2"
                style="color:#fff;border-radius:0 3px 3px 0"
                :style="{
                    'background-color': item.color,
                }"
            >{{ item.content }}</small>
        </p>
    </div>
</template>

<script setup>
const badges = [
    {
        label: 'Build Time',
        content: (() => {
            const d = new Date(__BUILD_TIME__);
            const p = e => `${e}`.padStart(2, 0);
            return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
        })(),
        color: '#f48',
    },
    {
        label: 'Build With',
        content: `${__VUE_VERSION__} + ${__VITE_VERSION__}`,
        color: '#4b8',
    },
    {
        label: 'Build With',
        content: __VUETIFY_VERSION__,
        color: '#16b',
    },
];
</script>