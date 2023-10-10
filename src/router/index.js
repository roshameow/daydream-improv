import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/noactivity',
    name: 'noactivity',
    component: () => import('../components/activities/TheWelcome.vue')
  },
];

//put activities pages' routes
const requireComponent = import.meta.glob('../components/activities/*[0-9_]+.vue');
Object.keys(requireComponent).forEach(fileName => {
  const importComponent = requireComponent[fileName];
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  routes.push({
    path: `/${componentName}`,
    component: importComponent,
    name: componentName
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
