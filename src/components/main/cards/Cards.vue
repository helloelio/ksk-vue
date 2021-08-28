<template>
  <div class="cards">
    <CardItem
      v-for="card in filterByName === '' ? cards : filteredCards"
      :key="card.id"
      :card="card"
      @delete-card="$emit('delete-card', card.id)"
      @edit-card="edited"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CardItem from './cardsItems/CardItem.vue';

export default {
  name: 'Cards',
  components: { CardItem },
  computed: {
    ...mapGetters([
      'cards', 'filteredCards', 'filterByName',
    ]),
  },
  methods: {
    edited(card) {
      this.$store.commit('EDIT_CARD', card);
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

@media only screen and (max-width: 1200px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
