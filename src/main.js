import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '@popperjs/core'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery'
window.jQuery = window.$ = require('jquery')
createApp(App)
    .use(router)
    .mount('#app')
    
