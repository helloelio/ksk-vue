import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_CARD, DELETE_CARD, EDIT_CARD, FILTER_CARD,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    counter: 1,
  },
  mutations: {
    /* eslint-disable */
    [ ADD_CARD ]: (state, payload) => state.cards.push(payload),
    [ DELETE_CARD ]: (state, payload) => state.cards = state.cards.filter((card) => card.id !== payload),
    [ EDIT_CARD ]: (state, payload) => state.cards.forEach((card) => {
      if (card.id === payload.id) {
        card.name = payload.name;
        card.type = payload.type;
      }
    }),
    [ FILTER_CARD ]: (state, payload) => state.cards.filter((card) => card.name === payload),
    increment(state) {
      state.counter += 1;
    },
  },
  actions: {},
  modules: {},

});
