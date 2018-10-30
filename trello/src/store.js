import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
    ]
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
    REMOVE_LIST: (state, list) => {
      state.lists.splice(list, 1);
    }
  },
  actions: {
    removeList: (context, list) => {
      context.commit("REMOVE_LIST", list)
    }
  }
});
