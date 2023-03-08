import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



/* Font Awesome Icons */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";



/*Bootstrap CSS, Js*/

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import  "./styles.css";


const app = createApp(App)

app.use(router)

app.mount('#app')
