import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/system/login'
import manage from '../page/manage'
import home from '../page/system/home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },{
            path:'/manage',
            component:manage
        },{
            path:'/home',
            component:home
        }
    ]
})
