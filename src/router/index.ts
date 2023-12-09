import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheHome.vue')
  },
  {
    path: '/make',
    name: 'make',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheRun.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheGallery.vue'),
    redirect: "/gallery/daily",
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        name: "gallery sort",
        path: '/gallery/:sort',
        component: () => import(/* webpackChunkName: "about" */ '@/views/TheGalleryFeed.vue'),
      },
    ],
  },
  {
    path: '/post-create',
    name: 'post create',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheCreatePost.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheProfile.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'privacy policy',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ThePrivacyPolicy.vue'),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
