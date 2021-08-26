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
    filterByName: '',
    filteredCards: [],
    counter: 1,
  },
  getters: {
    /* eslint-disable */
    cards: (state) => state.cards,
    optionValues: (state) => state.optionValues,
    filterByName: (state) => state.filterByName,
    filteredCards: (state) => state.filteredCards,
  },
  mutations: {
    [ ADD_CARD ]: (state, payload) => state.cards.push(payload),
    [ DELETE_CARD ]: (state, payload) => {
      if (state.filterByName === '') {
        state.cards = state.cards.filter((card) => card.id !== payload);
      } else {
        state.cards = state.cards.filter((card) => card.id !== payload);
        state.filteredCards = state.filteredCards.filter((card) => card.id !== payload);
      }
    },
    [ SORTING_CARDS ]: (state, payload) => {
      if (state.filterByName === '') {
        state.cards = state.cards.sort((a, b) => {
          if (payload === 'ascending') return a.name > b.name ? 1 : -1;
          if (payload === 'descending') return a.name < b.name ? 1 : -1;
        });
      } else {
        state.filteredCards = state.filteredCards.sort((a, b) => {
          if (payload === 'ascending') return a.name > b.name ? 1 : -1;
          if (payload === 'descending') return a.name < b.name ? 1 : -1;
        });
      }
    },
    [ FILTER_CARDS ]: (state, payload) => {
      state.filterByName = payload;
      state.filteredCards = state.cards.filter((card) => card.name.toLowerCase().includes(payload.toLowerCase()));
    },
    [ EDIT_CARD ]: (state, payload) => state.cards.forEach((card) => {
      if (card.id === payload.id) {
        console.log('a');
        card.name = payload.name;
        card.type = payload.type;
      }
    }),
    increment(state) {
      state.counter += 1;
    },
  },
});

