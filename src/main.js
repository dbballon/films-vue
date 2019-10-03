import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Films from './components/Films'
import Home from './components/Home'


Vue.use(BootstrapVue);

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [{path:'/',component:Home},{path:'/films',component:Films}]
const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
