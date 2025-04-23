import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import RulesPage from "@/views/RulesPage.vue"
import AboutPage from '@/views/AboutPage.vue'
import BanListPage from '@/views/BanListPage.vue'
import CardsPage from '@/views/CardsPage.vue'
import DownloadsPage from '@/views/DownloadsPage.vue'
import LoginSignupPage from '@/views/LoginSignupPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import PrintCardsPage from '@/views/PrintCardsPage.vue'
import KeywordsPage from '@/views/KeywordsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },

  {
    path: '/rules',
    name: 'Rules',
    component: RulesPage
  },

  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/ban-list',
    name: 'BanList',
    component: BanListPage,
  },
  {
    path: '/cards-all',
    name: 'Cards',
    component: CardsPage,
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component: DownloadsPage,
  },
  {
    path: '/enter',
    name: 'LoginSignup',
    component: LoginSignupPage,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage,
  },
  {
    path: '/print-cards',
    name: 'PrintCards',
    component: PrintCardsPage,
  },
  {
    path: '/keywords',
    name: 'Keywords',
    component: KeywordsPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
