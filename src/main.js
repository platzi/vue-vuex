import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { Icon } from '@iconify/vue';

const app = createApp(App)

app.use(router)
app.use(store)
app.component("Icon", Icon)

app.mount('#app')
