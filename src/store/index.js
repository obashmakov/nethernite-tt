import Vue from 'vue';
import Vuex from 'vuex';
import packets from './modules/packets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    packets,
  },
});
