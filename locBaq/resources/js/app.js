require('./bootstrap');
import Vue from 'vue'
window.Vue = require('vue');
import Vuetify from 'vuetify'
import MainApp from './components/MainApp.vue';
import VueRouter from 'vue-router'
import {routes} from './routes'
import Vuex from 'vuex'

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes,
    mode: 'history'
})

export const store = new Vuex.Store({
    state: {
        isLoged: false,
        stateNavbar: 'SignIn',
        username: ""
    },
    mutations:{
        changeLogState(data){
            if(data.isLoged){
                data.isLoged = false;
                data.stateNavbar = 'SignIn';
            }
            else{
                data.isLoged = true;
                data.stateNavbar = 'User'
            }
        },
        setUsername(data,name){
            console.log(name)
            data.username = name    
        }

    }

})

const app = new Vue({
    el:'#app',
    router,
    vuetify : new Vuetify(),
    store: store,
    components: {
        MainApp
    }
});