import { createRouter, createWebHashHistory } from 'vue-router';

import Text from '../views/text.vue';
import Image from '../views/image.vue';
import About from '../views/about.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/text',
            component: Text,
            meta: {
                keepAlive: true,
            },
        },
        {
            path: '/image',
            component: Image,
            meta: {
                keepAlive: true,
            },
        },
        {
            path: '/about',
            component: About,
            meta: {
                keepAlive: true,
            },
        },
        {
            path: '/:p(.*)*',
            redirect: '/text',
        },
    ],
});