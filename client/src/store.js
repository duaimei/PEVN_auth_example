import Vue from 'vue';
import Vuex from 'vuex';
import UserService from './services/user.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    yesMessage: null,
  },
  getters: {
    getYes: state => state.yesMessage,
  },
  actions: {
    getLogin(code) {
      console.log('entered getLogin');
      UserService.authenticate(code).then((response) => { console.log(response); });
      // commit('SET_USER_DATA', {});
    },
    fetchYess({ commit }) {
      UserService.yess().then((response) => { commit('SET_YESS', response.data.message); });
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
    SET_YESS(state, message) {
      state.yesMessage = message;
    },
  },
});
