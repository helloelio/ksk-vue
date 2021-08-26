<template>
  <div class="cards-tabled">
    <table>
      <tr class="table-head">
        <th>ID</th>
        <th>Номер накладной</th>
        <th>Тип заказа</th>
        <th>Дата создания</th>
        <th></th>
      </tr>
      <cardItemTable
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @open-edit-modal="$emit('open-edit-modal', card.id)"
        @delete-card="$emit('delete-card', card.id)"
      />
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cardItemTable from './cardsItems/cardItemTable.vue';

export default {
  components: { cardItemTable },
  name: 'CardsTabled',
  computed: {
    ...mapGetters([
      'cards',
    ]),
  },
};
</script>

<style scoped>
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
</style>
