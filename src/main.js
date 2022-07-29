import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueAxios from 'vue-axios'
import axios from 'axios'
import './assets/tailwind.css'


axios.defaults.baseURL = "https://x8ki-letl-twmt.n7.xano.io/api:4yIyC8ks"
axios.defaults.headers.post["objects"]
axios.defaults.headers.get["objects"]

createApp(App).use(vueAxios, axios).use(router).mount('#app')
