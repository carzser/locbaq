require('./bootstrap');
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '@/js/views/App'
import MainApp from './components/MainApp.vue';
import {routes} from './routes'
//window.Vue = require('vue');

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const router = new VueRouter({
    mode: 'history',
    routes
})

export const store = new Vuex.Store({
    state: {
        isLoged: false,
        stateNavbar: 'SignIn',
        username: "",
        token:"",
        isOwner: true,
        shoppingCart:[
            {
                name: 'p1',
                quantity: 1,
                price: 5000
            },
            {
                name: 'p2',
                quantity: 1,
                price: 5000
            },
            {
                name: 'p3',
                quantity: 1,
                price: 5000
            },
            {
                name: 'p4',
                quantity: 1,
                price: 5000
            },
            {
                name: 'p5',
                quantity: 1,
                price: 5000
            },
            {
                name: 'p6',
                quantity: 1,
                price: 5000
            }
        ]
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
        },
        setToken(data,token){
            data.token = token;
        },
        addItem(data,item){
            data.shoppingCart.append({name:item,quantity:1});
        },
        addQuantityItem(data,itemName){
          var ob;
          var i = 0,idx;
            for (ob of data.shoppingCart){
            if(ob.name == itemName){
                idx = i;
                break;
            }
            i++;
          }  
          data.shoppingCart[idx].quantity++;
        },
        subQuantityItem(data,itemName){
            var ob, i = 0,idx;
            for (ob  of  data.shoppingCart){
              if(ob.name == itemName){
                  idx = i;
                  break;
              }
              i++;
            }  
            data.shoppingCart[idx].quantity--;
            if(data.shoppingCart[idx].quantity==0){
                data.shoppingCart.splice(idx,1);
            }
        },
        cleanShoppingCart(data){
            data.shoppingCart=[];
        }

    }

})
const app = new Vue({
    el:'#app',
    router,
    vuetify : new Vuetify(),
    store: store,
    render: h=> h(App),
});
