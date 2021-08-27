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
    readyToEdit: false,
    cardToEdit: {},
    counter: 1,
  },
  getters: {
    /* eslint-disable */
    cards: (state) => state.cards,
    headerTitle: (state) => state.headerTitle,
    optionValues: (state) => state.optionValues,
    filterByName: (state) => state.filterByName,
    filteredCards: (state) => state.filteredCards,
    readyToEdit: (state) => state.readyToEdit,
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
    [ EDIT_CARD ]:
      (state, payload) => state.cards.forEach((card) => {
        state.readyToEdit = true;
        if (card.id === payload.id) {
          state.cardToEdit = card;
        }
      }),
    editing: (state, payload) => {
      state.cardToEdit.name = payload.name;
      state.cardToEdit.type = payload.type;
      state.readyToEdit = false;
    },
    increment: (state) => {
      state.counter += 1;
    },
  },
})
;

