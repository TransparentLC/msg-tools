<template>
    <v-app>
        <v-app-bar color="primary">
            <v-app-bar-title>聊天消息处理工具</v-app-bar-title>
        </v-app-bar>

        <v-main style="padding-bottom:72px">
            <v-container style="max-width:1024px">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component v-if="$route.meta.keepAlive" :is="Component" :key="$route.fullPath"></component>
                    </keep-alive>
                    <component v-if="!$route.meta.keepAlive" :is="Component"></component>
                </router-view>
            </v-container>
        </v-main>

        <v-footer
            app
            fixed
            bottom
            left
            right
            class="pa-0"
        >
            <v-tabs
                background-color="primary"
                centered
                stacked
                fixed-tabs
                style="width:100%"
                :model-value="tabs.findIndex(e => e.to === $route.path)"
            >
                <v-tab v-for="item in tabs" :key="item.to" :to="item.to">
                    <v-icon :icon="item.icon" size="x-large"></v-icon>{{ item.text }}
                </v-tab>
            </v-tabs>
        </v-footer>
    </v-app>
</template>

<script setup>
import { reactive } from 'vue';
import {
    mdiFormTextbox,
    mdiImageOutline,
    mdiInformationOutline,
} from '@mdi/js';

const tabs = reactive([
    {
        icon: mdiFormTextbox,
        text: '文本处理',
        to: '/text',
    },
    {
        icon: mdiImageOutline,
        text: '图片处理',
        to: '/image',
    },
    {
        icon: mdiInformationOutline,
        text: '　关于　',
        to: '/about',
    },
]);
</script>