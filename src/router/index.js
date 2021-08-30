import Vue from 'vue';
import VueRouter from 'vue-router';
import Cards from '../components/main/cards/Cards.vue';
import ATable from '../components/main/cards/CardsTabled.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/widgets' },
  { path: '/widgets', component: Cards },
  { path: '/tables', component: ATable },
];

const router = new VueRouter({
  routes,
});

export default router;
