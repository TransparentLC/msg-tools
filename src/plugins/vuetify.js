// Vuetify
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

// Styles
import 'vuetify/styles';

export default createVuetify({
    // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
    theme: {
        variations: {
            colors: [
                'primary',
                'secondary',
            ],
            lighten: 2,
            darken: 2,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});
