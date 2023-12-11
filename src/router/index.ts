import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/TheHome.vue')
  },
  {
    path: '/make',
    name: 'make',
    component: () => import('@/views/TheRun.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/TheGallery.vue'),
    redirect: "/gallery/daily",
    children: [
      {
        name: "gallery sort",
        path: '/gallery/:sort',
        component: () => import('@/views/TheGalleryFeed.vue'),
      },
    ],
  },
  {
    path: '/post-create',
    name: 'post create',
    component: () => import('@/views/TheCreatePost.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/TheProfile.vue'),
  },
  {
    path: '/p/:title',
    name: 'post',
    component: () => import('@/views/ThePost.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'privacy policy',
    component: () => import('@/views/ThePrivacyPolicy.vue'),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import('@/views/TheNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
