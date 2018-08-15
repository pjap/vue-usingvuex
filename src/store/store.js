import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  // Mutation Is Synchronize
  mutations,
  // Action Is Asynchronize
  actions,
  modules: {
    counter: counter
  }
})
