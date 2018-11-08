import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    cards: []
  },
  getters: {
    countLists: state => {
      return state.lists.length;
    }
  },
  mutations: {
    ADD_LIST: (state, header) => {
      state.lists.push(header);
    },
    ADD_CARD: (state, task) => {
      state.cards.push(task);
    }
  },
  actions: {}
});
