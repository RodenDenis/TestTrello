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
    ADD_LIST: (state, { header, id} ) => {
      state.lists.push({header, id});
    },
    ADD_CARD: (state, {task, listNum, id}) => {
      state.cards.push({task, listNum, id});
    },
  },
  actions: {}
});
