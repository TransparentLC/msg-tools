import { createApp } from 'vue';
import app from './app.vue';
import vuetify from './plugins/vuetify.js';
import router from './router/index.js';
import snackbar from './plugins/snackbar.js';
// import dialog from './plugins/dialog';

createApp(app)
    .use(router)
    .use(vuetify)
    .use(snackbar, {
        vuetify,
    })
    // .use(dialog, {
    //     vuetify,
    // })
    .mount('#app');

/**
 * @param {String} label
 * @param {String} content
 * @param {String} color
 */
const consoleBadge = (label, content, color) => console.log(
    `%c ${label} %c ${content} `,
    'color:#fff;background-color:#555;border-radius:3px 0 0 3px',
    `color:#fff;background-color:${color};border-radius:0 3px 3px 0`
);

consoleBadge('Project', 'msg-tools', '#07c');
consoleBadge('Author', 'TransparentLC', '#f84');
consoleBadge('Build Time', __BUILD_TIME__, '#f48');
consoleBadge('Build With', `${__VUE_VERSION__} + ${__VITE_VERSION__}`, '#4b8');
consoleBadge('Build With', __VUETIFY_VERSION__, '#16b');