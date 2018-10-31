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
    ADD_LIST: (state, list) => {
      state.lists.push(list);
    },
    ADD_CARD: (state, card) => {
      state.cards.push(card);
    },
    REMOVE_LIST: (state, list) => {
      state.lists.splice(list, 1);
    },
    REMOVE_CARD: (state, card) => {
      state.cards.splice(card, 1);
    }
  },
  actions: {
    removeList: (context, list) => {
      context.commit("REMOVE_LIST", list);
    },
    removeList: (context, card) => {
      context.commit("REMOVE_CARD", card);
    }
  }
});
