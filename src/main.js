import { createApp } from 'vue'
import "./assets/App.css";
import "./assets/core.css";
import router from './router'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue3Marquee from 'vue3-marquee'
const app = createApp(App)
AOS.init({
    duration: 1000,
  })
app.use(Vue3Marquee)
app.use(AOS)
app.use(router)
app.mount('#app')
