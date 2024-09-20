import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../page/index/index.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/Index',
        name: 'Index',
        component: IndexView
    }
]

const router = new VueRouter({
    routes
})

export default router
