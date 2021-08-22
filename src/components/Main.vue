<template>
  <main class="main">
    <div class="left-side">
      <AddButton @open-create-modal="$emit('open-create-modal')"/>
      <FilterCards @filter-name="updateFilterName"/>
    </div>
    <div class="right-side">
      <div class="right-side-header">
        <SortingCards @sortByName="updateSortingName"/>
        <div class="routes">
          <router-link to="/tables" class="nav-link">
            <button class="nav-button nav-table" @click="setPathToTables">
              <img src="../assets/table-icon.svg" alt=""/>
            </button>
          </router-link>
          <router-link to="/widgets" class="nav-link">
            <button class="nav-button nav-widgets" @click="setPathToWidgets">
              <img src="../assets/widget-icon.svg" alt=""/>
            </button>
          </router-link>
        </div>
      </div>
      <div class="cards" v-if="path === 'widgets'">
        <router-view
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @delete-card="$emit('delete-card', card.id)"
          @open-edit-modal="$emit('open-edit-modal', card.id)"
        />
      </div>
      <div class="cards-tabled" v-if="path === 'tables' && cards.length > 0">
        <table>
          <tr class="table-head">
            <th>ID</th>
            <th>Номер накладной</th>
            <th>Тип заказа</th>
            <th>Дата создания</th>
            <th></th>
          </tr>
          <router-view
            v-for="card in cards"
            :key="card.id"
            :card="card"
            @delete-card="$emit('delete-card', card.id)"
            @open-edit-modal="$emit('open-edit-modal', card.id)"
          />
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import AddButton from './main/AddButton.vue';
import SortingCards from './main/SortingCards.vue';
import FilterCards from './main/FilterCards.vue';

export default {
  props: ['cards'],
  components: {
    FilterCards,
    SortingCards,
    AddButton,
  },
  data() {
    return {
      filterByName: '',
      filteredByName: [],
      sortingByName: '',
      path: 'widgets',
    };
  },
  methods: {
    updateFilterName(newFilterName) {
      this.filterByName = newFilterName;
      this.filteredByName = this.cards.filter((card) => card.name === newFilterName);
      //  fix filter
    },
    updateSortingName(sortByName) {
      this.sortingByName = sortByName;
    },
    setPathToWidgets() {
      this.path = 'widgets';
    },
    setPathToTables() {
      this.path = 'tables';
    },
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.cards-tabled {
  width: 100%;
  margin-top: 20px;
}

.table-head {
  background-color: #e6e6e6;
  color: black;
}

.table-head > th {
  padding: 15px;
  font-weight: bold;
}

.nav-button {
  width: 40px;
  height: 40px;
  border: 1px solid #647a8c;
}

.nav-widgets {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}

.nav-table {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

main {
  display: grid;
  grid-template-columns: auto 1fr;
}

@media only screen and (max-width: 1200px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
