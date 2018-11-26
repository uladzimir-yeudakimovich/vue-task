import Vue from 'vue';
import App from './App';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
