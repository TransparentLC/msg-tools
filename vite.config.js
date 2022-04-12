import fs from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from '@vuetify/vite-plugin';
import { createHtmlPlugin } from 'vite-plugin-html';
import autoprefixer from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';

const isProduction = process.env.NODE_ENV === 'production';
const noop = () => {};

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        vue(),
        // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
        vuetify({
            autoImport: true,
        }),
        isProduction ? createHtmlPlugin({
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                decodeEntities: true,
                removeComments: true,
                removeAttributeQuotes: false,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeEmptyAttributes: true,
                useShortDoctype: true,
                processConditionalComments: true,
                sortAttributes: true,
                sortClassName: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: false,
            },
        }) : noop,
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    overrideBrowserslist: [
                        '>100%',
                    ],
                }),
            ],
        },
    },
    build: {
        chunkSizeWarningLimit: Infinity,
        minify: 'terser',
        terserOptions: {
            compress: {
                arguments: true,
                ecma: 2020,
                module: true,
                unsafe_math: true,
                unsafe_methods: true,
                unsafe_proto: true,
                unsafe_regexp: true,
                unsafe_symbols: true,
                unsafe_undefined: true,
                passes: 2,
            },
            mangle: {
                module: true,
            },
            format: {
                ecma: 2020,
                comments: false,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes('node_modules') || id.includes('wasm-modules')) {
                        return 'vendor';
                    }
                },
            },
            plugins: [
                visualizer({
                    gzipSize: true,
                    brotliSize: true,
                }),
            ],
        },
    },
    define: {
        __BUILD_TIME__: `"${(new Date).toISOString()}"`,
        __VUE_VERSION__: `"Vue ${JSON.parse(fs.readFileSync('./node_modules/vue/package.json', {encoding: 'utf-8'})).version}"`,
        __VITE_VERSION__: `"Vite ${JSON.parse(fs.readFileSync('./node_modules/vite/package.json', {encoding: 'utf-8'})).version}"`,
        __VUETIFY_VERSION__: `"Vuetify ${JSON.parse(fs.readFileSync('./node_modules/vuetify/package.json', {encoding: 'utf-8'})).version}"`,
    },
});