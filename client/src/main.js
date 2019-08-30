import Vue from 'vue';
import GAuth from 'vue-google-oauth2';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import secret from '../config/secrets.json';


Vue.config.productionTip = false;


const gauthOption = {
  clientId: secret.GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
};
Vue.use(GAuth, gauthOption);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
