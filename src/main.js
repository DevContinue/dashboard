import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueAxios from 'vue-axios'
import axios from 'axios'
import './assets/tailwind.css'


createApp(App).use(vueAxios, axios).use(router).mount('#app')
