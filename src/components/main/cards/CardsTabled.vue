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
        v-for="card in filterByName === '' ? cards : filteredCards"
        :key="card.id"
        :card="card"
        @edit-card="edited"
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
      'cards', 'filteredCards', 'filterByName',
    ]),
  },
  methods: {
    edited(card) {
      this.$store.commit('EDIT_CARD', card);
      document.querySelector('.modal-edit').classList.remove('hidden');
      document.querySelector('.modal-edit').classList.add('shown-edit-modal');
    },
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
