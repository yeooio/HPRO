import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Chart from "chart.js/auto";

const app = createApp(App);
app.config.globalProperties.$Chart = Chart;
// createApp(App).mount('#app')
app.use(router);
app.mount("#app");

