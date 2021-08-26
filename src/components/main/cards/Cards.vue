<template>
  <div class="cards">
    <CardItem
      v-for="card in cards"
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
      'cards',
    ]),
  },
};
</script>

<style scoped>
</style>
