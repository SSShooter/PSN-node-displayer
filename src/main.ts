import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vLoading from '@/directives/loading'

createApp(App).use(router).directive('loading', vLoading).mount('#app')
