import { createRouter, createWebHistory} from 'vue-router';
// import type { RouteRecordRaw } from 'vue-router';
// import Login from '../views/Login.vue';
// import Home from '../views/Home.vue';
// const Login = () => import('../views/Login.vue');
const Home = () => import('../views/Home.vue');
// const Prepare1 = ()=>import("../views/Prepare1.vue")
// const Prepare1 =()=>import('../views/Prepare1.vue')
const Func =()=>import('../views/Func.vue')

const routes = [
  
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Func',
        name: 'Func',
        component: Func
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;