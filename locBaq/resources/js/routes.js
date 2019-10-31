import login from '../views/vue-views/login.vue'
import register from '../views/vue-views/Register.vue'
import home from './components/Home.vue'
import createRest from '../views/vue-views/createRest.vue'
import perfil from './components/Perfil.vue'
import reserva from './components/ReservaCard.vue'
import Restaurant from './components/Restaurants.vue'
import reservationProcess from './components/ReservationProcess.vue'


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
    },
    {
        path: '/myprofile',
        component: perfil
    },
    {
        path: '/reserva',
        component: reserva
    },
    {
        path: '/restaurants',
        component: Restaurant
    },
    {
        path:'/realizar_pedido',
        component: reservationProcess
    }
]