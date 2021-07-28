/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Todos from './components/App.vue';

require('./bootstrap');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Notifications from 'vue-notification';


window.Vue = require('vue').default;
window.Vue.use(Notifications)
    // Make BootstrapVue available throughout your project
window.Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
window.Vue.use(IconsPlugin)



const app = new Vue({
    el: '#app',
    components: {
        Todos
    }
});