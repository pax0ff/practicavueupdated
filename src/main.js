import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
AOS.init();
createApp(App).mount('#app')


