import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import MatchupsView from '../components/MatchupsView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/matchups',
        name: 'Matchups',
        component: MatchupsView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router