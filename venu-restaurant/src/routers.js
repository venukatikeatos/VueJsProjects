import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
import DeleteRestaurant from './components/DeleteRestaurant.vue'


const routes=[
    {
        name:'SignUp',
        component:SignUp,
        path:'/SignUp'
    },
    {
        name:'Home',
        component:Home,
        path:'/Home'
    },
    {
        name:'Login',
        component:Login,
        path:'/'
    },
    {
        name:'AddRestaurant',
        component:AddRestaurant,
        path:'/Add'
    },
    {
        name:'UpdateRestaurant',
        component:UpdateRestaurant,
        path:'/Update/:id'
    },
    {
        name:'DeleteRestaurant',
        component:DeleteRestaurant,
        path:'/delete/:id'
    }
]
   

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router;