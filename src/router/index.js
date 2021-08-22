import Vue from 'vue';
import VueRouter from 'vue-router';
import cardItem from '../components/main/cards/CardItem.vue';
import cardItemTable from '../components/main/cards/cardItemTable.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/widgets', component: cardItem },
  { path: '/tables', component: cardItemTable },
];

const router = new VueRouter({
  routes,
});

export default router;
