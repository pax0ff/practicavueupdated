import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
AOS.init();
createApp(App).use(Bootstrap).mount('#app')


