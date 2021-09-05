import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_CARD, DELETE_CARD, EDIT_CARD, FILTER_CARDS, SORTING_CARDS, SORTING_ITEMS_TABLE,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerTitle: 'Тестовое задание',
    optionValues: ['RUED', 'RUEX', 'RUSG'],
    items: [],
    filterByName: '',
    filteredCards: [],
    cardToEdit: {},
    newCardName: '',
    readyToEdit: '',
    newCardType: '',
    sortParamsDefault: {
      sidx: 'number',
      sord: 'desc',
    },
    sortParams: {
      sidx: '',
      sord: '',
    },
    counter: 1,
  },
  getters: {
    /* eslint-disable */
    items: (state) => state.items,
    headerTitle: (state) => state.headerTitle,
    optionValues: (state) => state.optionValues,
    filterByName: (state) => state.filterByName,
    filteredCards: (state) => state.filteredCards,
    readyToEdit: (state) => state.readyToEdit,
    sortParams: (state) => state.sortParams,
    sortParamsDefault: (state) => state.sortParamsDefault
  },
  mutations: {
    [ADD_CARD]: (state, payload) => state.items.push(payload),
    [DELETE_CARD]: (state, payload) => {
      if (state.filterByName === '') {
        state.items = state.items.filter((item) => item.id !== payload.id);
      } else {
        state.items = state.items.filter((item) => item.id !== payload.id);
        state.filteredCards = state.filteredCards.filter((item) => item.id !== payload.id);
      }
    },
    [SORTING_CARDS]: (state, payload) => {
      if (state.filterByName === '') {
        state.items = state.items.sort((a, b) => {
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
    [SORTING_ITEMS_TABLE]: (state, payload) => {
      state.sortParams.sidx = payload.data.sidx;
      state.sortParams.sord = payload.data.sord;
      if (state.filterByName === '') {
        state.items = state.items.sort((a, b) => {
          switch (state.sortParams.sord) {
            case 'asc':
              return a[payload.data.sidx] > b[payload.data.sidx] ? 1 : -1;
              break;
            case 'desc':
              return a[payload.data.sidx] > b[payload.data.sidx] ? -1 : 1;
              break;
            default:
              return a[payload.data.sidx] > b[payload.data.sidx] ? 0 : 1;
          }
        })
      } else {
        state.filteredCards = state.filteredCards.sort((a, b) => {
          switch (state.sortParams.sord) {
            case 'asc':
              return a[payload.data.sidx] > b[payload.data.sidx] ? 1 : -1;
              break;
            case 'desc':
              return a[payload.data.sidx] > b[payload.data.sidx] ? -1 : 1;
              break;
            default:
              return a[payload.data.sidx] > b[payload.data.sidx] ? 0 : 1;
          }
        })
      }
    },
    [FILTER_CARDS]: (state, payload) => {
      state.filterByName = payload;
      state.filteredCards = state.items.filter((item) => item.name.toLowerCase().includes(payload.toLowerCase()));
    },
    setNewCardName: (state, payload) => state.newCardName = payload,
    setNewCardType: (state, payload) => state.newCardType = payload,
    [EDIT_CARD]:
      (state, payload) => state.items.forEach((item) => {
        if (item.id === payload.id) {
          state.cardToEdit = item;
          state.newCardName = item.name;
          state.newCardType = item.type;
        }
      }),
    editing: (state) => {
      state.cardToEdit.name = state.newCardName;
      state.cardToEdit.type = state.newCardType;
      // reset values
      state.readyToEdit = state.newCardName = state.newCardType = '';
    },
    increment: (state) => {
      state.counter += 1;
    },
  },
})
  ;

