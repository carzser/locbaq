require('./bootstrap');
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import App from '@/js/views/App'
import MainApp from './components/MainApp.vue';
import {routes} from './routes'
//window.Vue = require('vue');

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

console.log("llegaaqui");
const router = new VueRouter({
    mode: 'history',
    routes
})

export const store = new Vuex.Store({
    state: {
        isLoged: false,
        stateNavbar: 'SignIn',
        username: "",
        isOwner: true
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
console.log("llega");
const app = new Vue({
    el:'#app',
    router,
    vuetify : new Vuetify(),
    store: store,
    render: h=> h(App),
});
