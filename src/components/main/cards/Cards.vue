<template>
  <div class="cards">
    <CardItem
      v-for="card in filterByName === '' ? cards : filteredCards"
      :key="card.id"
      :card="card"
      @delete-card="$emit('delete-card', card.id)"
      @open-edit-modal="$emit('open-edit-modal', card)"
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
