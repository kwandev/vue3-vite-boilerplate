import '@/assets/styles/index.scss';

import { createApp } from 'vue';
import router from './routers';
import { createPinia } from 'pinia';
import plugins from '@/plugins';

import App from './App.vue';

createApp(App).use(router).use(createPinia()).use(plugins).mount('#app');
