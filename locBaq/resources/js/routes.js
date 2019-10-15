import login from '../views/vue-views/login.vue'
import register from '../views/vue-views/Register.vue'
import home from './components/Home.vue'
export const routes = [
    {
        path: '/login',
        component: login,

    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/home',
        component: home
    }
]