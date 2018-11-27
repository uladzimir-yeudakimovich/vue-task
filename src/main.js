import Vue from 'vue';
import App from './App';
import Vuelidate from 'vuelidate';
import { i18n } from './plugins/i18n';

Vue.use(Vuelidate);
new Vue({
  el: '#app',
  //router,
  i18n,
  render: (h) => h(App)
})
