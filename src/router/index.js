import VueRouter from "vue-router";
import Vue from 'vue';
import LenseView from '../views/lense.vue'
import WeatherView from '../views/weather.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    //라우터 영역
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/lense'
        },
        {
            path: '/lense',
            name: 'lense',
            component: LenseView,
        },
        {
            path: '/weather',
            name: 'weather',
            component: WeatherView,
        },
       
    ]
})