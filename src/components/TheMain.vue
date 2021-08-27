<template>
  <main class="main">
    <div class="left-side">
      <AddButton @open-create-modal="$emit('open-create-modal')"/>
      <FilterCards/>
    </div>
    <div class="right-side">
      <div class="right-side-header">
        <SortingCards/>
        <div class="routes">
          <router-link
            to="/tables"
            class="nav-link">
            <button class="nav-button nav-table">
              <img
                src="../assets/table-icon.svg"
                alt="table icon"/>
            </button>
          </router-link>
          <router-link
            to="/widgets"
            class="nav-link">
            <button class="nav-button nav-widgets">
              <img
                src="../assets/widget-icon.svg"
                alt="widget icon"/>
            </button>
          </router-link>
        </div>
      </div>
      <transition name="fade">
        <router-view @delete-card="deleteCard"/>
      </transition>
    </div>
  </main>
</template>

<script>
import AddButton from './main/AddButton.vue';
import SortingCards from './main/SortingCards.vue';
import FilterCards from './main/FilterCards.vue';

export default {
  components: {
    FilterCards,
    SortingCards,
    AddButton,
  },
  methods: {
    deleteCard(idToDelete) {
      this.$store.commit('DELETE_CARD', idToDelete);
    },
  },
};

</script>

<style scoped>
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

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
</style>
