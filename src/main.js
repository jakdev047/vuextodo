import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';
import utilities from './utilities';

Vue.config.productionTip = false;


new Vue({
  utilities,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
