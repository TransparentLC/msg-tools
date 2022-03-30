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
            >
                <v-tab to="/text">
                    <v-icon :icon="mdiFormTextbox" size="x-large"></v-icon>
                    文本处理
                </v-tab>

                <v-tab to="/image">
                    <v-icon :icon="mdiImageOutline" size="x-large"></v-icon>
                    图片处理
                </v-tab>

                <v-tab to="/about">
                    <v-icon :icon="mdiInformationOutline" size="x-large"></v-icon>
                    &#x3000;关于&#x3000;
                </v-tab>
            </v-tabs>
        </v-footer>
    </v-app>
</template>

<script setup>
import {
    mdiFormTextbox,
    mdiImageOutline,
    mdiInformationOutline,
} from '@mdi/js';
</script>