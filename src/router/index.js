import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Agenda from '../components/Agenda.vue'
import ActivityCard from '../components/CardCarousel.vue'
import PersonCard from '../components/CardHover.vue'

const routes = [
  {
    path: '',
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
    path: '/agenda',
    name: 'agenda',
    component: Agenda,
    children: [{
      path: '', //default page
      name: 'home',
      // component: HomeView
      component: () => import('../components/activities/TheWelcome.vue')

      }, 
      {
        path: 'noactivity',
        name: 'noactivity',
        component: () => import('../components/activities/NoActivity.vue')
      },]
  },
  {
    path: '/activitycard',
    name: 'activitycard',
    component: ActivityCard
  },
  {
    path: '/personcard',
    name: 'personcard',
    component: PersonCard
  },

];

//put activities pages' routes
const agendaChildren = [];
const requireComponent = import.meta.glob('../components/activities/*[0-9_]+.vue');
Object.keys(requireComponent).forEach(fileName => {
  const importComponent = requireComponent[fileName];
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  agendaChildren.push({
    path: `${componentName}`,
    component: importComponent,
    name: componentName
  });
});
const agendaRoute = routes.find(route => route.path === '/agenda'); // Add the children routes to the 'agenda' 
agendaRoute.children = agendaRoute.children.concat(agendaChildren);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 添加404页面配置
  fallback: true,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
