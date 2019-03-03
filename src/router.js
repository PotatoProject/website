import '@mdi/font/css/materialdesignicons.css'

import Router from 'vue-router'
import Vue from 'vue'

const Home = () => import('./views/Home.vue')
const Downloads = () => import('./views/Downloads.vue')
const Changelog = () => import('./views/Changelog.vue')
const Team = () => import('./views/Team.vue')

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: Downloads
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: Changelog
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
  ],
  mode: 'history',
  
})

