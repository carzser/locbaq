require('./bootstrap');
import Vue from 'vue'
window.Vue = require('vue');
import Vuetify from 'vuetify'
import MainApp from './components/MainApp.vue';
import VueRouter from 'vue-router'
import {routes} from './routes'


Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
})


const app = new Vue({
    el:'#app',
    router,
    vuetify : new Vuetify(),
    components: {
        MainApp
    }
});