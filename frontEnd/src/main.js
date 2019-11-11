import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import VueRouter from 'vue-router'
import { routes } from './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(require('vue-moment'));
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;


const router = new VueRouter({
  routes,
});

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
