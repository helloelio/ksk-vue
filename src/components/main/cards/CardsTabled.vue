<template>
  <a-table
    :items="filterByName === '' ? items : filteredCards"
    :headers="headers"
    :useExtRowComponent="getExtRowComponent"
    :getRowClassesByItem="getRowClassesByItem"
    @onChangeSort="onChangeSort"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import ATable from './cardsItems/ATable.vue';
import TableExtRowComponent from '../../../../stubs/components/TableExtRowComponent.vue';
import TableCustomCellActions from '../../../../stubs/components/TableCustomCellActions.vue';

export default {
  components: { ATable },
  name: 'CardsTabled',
  data() {
    return {
      headers: [
        {
          key: 'pos',
          title: 'Position',
          headerAlign: 'center',
          dataAlign: 'center',
          classes: 'order-col width-4',
        },
        {
          key: 'name',
          name: 'name',
          title: 'Name',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,
        },
        {
          key: 'date',
          name: 'date',
          title: 'Date',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,

        },
        {
          key: 'type',
          name: 'type',
          title: 'Type',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,

        },
        {
          key: 'actions',
          title: 'Actions',
          headerAlign: 'center',
          dataAlign: 'center',
          useComponent: TableCustomCellActions,
        },
        {
          key: 'mobileDescription',
          title: 'Description',
          headerAlign: 'center',
          dataAlign: 'center',
          classes: 'no-info mobile-col',
          position: 'afterAll',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'items', 'filteredCards', 'filterByName',
    ]),
    getExtRowComponent() {
      return TableExtRowComponent;
    },
  },
  methods: {
    edited(item) {
      this.$store.commit('EDIT_CARD', item);
      this.$store.state.readyToEdit = 'ready';
    },
    getRowClassesByItem(item) {
      return `custom-class-${item.id}`;
    },
    onChangeSort(data) {
      this.$store.commit('SORTING_ITEMS_TABLE', data);
    },
  },
};
</script>

<style scoped>
.cards-tabled {
  width: 100%;
  margin-top: 20px;
}
</style>
