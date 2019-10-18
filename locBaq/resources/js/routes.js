import login from '../views/vue-views/login.vue'
import register from '../views/vue-views/Register.vue'
import home from './components/Home.vue'
import createRest from '../views/vue-views/createRest.vue'
export const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login,

    },
    {
        path: '/register',
        name : 'register',
        component: register
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/createrest',
        component: createRest
    }
]