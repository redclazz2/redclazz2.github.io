import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import AboutMe from './components/content/about_me/AboutMe.vue';
import Projects from "./components/content/projects/Projects.vue";
import ContactMe from './components/content/contact_me/ContactMe.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: AboutMe },
  { path: '/projects', component: Projects },
  { path: '/contact', component: ContactMe }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
