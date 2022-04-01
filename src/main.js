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