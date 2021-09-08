<template>
  <div class="cards">
    <card-item
      v-for="item in filterByName === '' ? items : filteredCards"
      :key="item.id"
      :item="item"
      @delete-card="$emit('delete-card', item)"
      @edit-card="edited"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CardItem from './cardsItems/CardItem.vue';

export default {
  name: 'items',
  components: { CardItem },
  computed: {
    ...mapGetters([
      'items', 'filteredCards', 'filterByName',
    ]),
  },
  methods: {
    edited(item) {
      this.$store.commit('EDIT_CARD', item);
      this.$store.state.readyToEdit = 'ready';
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
@media only screen and (max-width: 1600px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 1200px) {
  .cards {
    justify-content: center;
  }
  .card {
    width: 300px;
  }
}
@media only screen and (max-width: 950px) {
  .card {
    width: 230px;
  }
}
@media only screen and (max-width: 760px) {
  .cards {
    grid-template-columns: 1fr;
    justify-content: center;
    width: 100%;
  }

  .card {
    width: 100%;
  }
}
</style>
