import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const pinia = createPinia();
app.use(pinia)

createApp(App).mount('#app')
