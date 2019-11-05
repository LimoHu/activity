import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/css/reset.css'
import './assets/font/iconfont.css'

import App from './pages/App.vue';
import routes from './routes';

Vue.use(VueRouter);
window.appVue = new Vue({el: '#app', render: (r) => r(App), router: new VueRouter(routes)});