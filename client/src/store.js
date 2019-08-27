import Vue from 'vue';
import Vuex from 'vuex';
import UserService from './services/user.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  actions: {
    getLogin({ commit }) {
      const user = UserService.authenticate();
      if (user) {
        console.log('Authenticated?');
        console.log(user);
        commit('SET_USER_DATA', {});
      } else {
        console.log('no?');
      }
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
  },
});
