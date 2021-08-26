<template>
  <div class="cards">
    <CardItem
      v-for="card in filteredCards.length === 0 ? cards : filteredCards"
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
      'cards', 'filteredCards',
    ]),
  },
};
</script>

<style scoped>
</style>
