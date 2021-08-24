import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_CARD, DELETE_CARD, EDIT_CARD, FILTER_CARDS, SORTING_CARDS,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerTitle: 'Тестовое задание',
    optionValues: ['RUED', 'RUEX', 'RUSG'],
    cards: [],
    counter: 1,
  },
  mutations: {
    /* eslint-disable */
    [ ADD_CARD ]: (state, payload) => state.cards.push(payload),
    [ DELETE_CARD ]: (state, payload) => state.cards = state.cards.filter((card) => card.id !== payload),
    [ EDIT_CARD ]: (state, payload) => state.cards.forEach((card) => {
      if (card.id === payload.id) {
        console.log(card.name, payload.name);
        card.name = payload.name;
        card.type = payload.type;
      }
    }),
    [ FILTER_CARDS ]: (state, payload) => state.cards.filter((card) => card.name === payload),
    [ SORTING_CARDS ]: (state, payload) => state.cards = state.cards.sort((a, b) => {
      if (payload === 'ascending') {
        if (a.name > b.name) return 1;
      }
      if (payload === 'descending') {
        if (a.name < b.name) return 1;
      }
    }),
    increment(state) {
      state.counter += 1;
    },
  },
  actions: {}
  ,
  modules: {}
  ,

})
;
