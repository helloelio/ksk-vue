<template>
  <a-table
    :items="filterByName === '' ? items : filteredCards"
    :headers="headers"
    :useExtRowComponent="getExtRowComponent"
    :sortParamsDefault="sortParamsDefault"
    :getRowClassesByItem="getRowClassesByItem"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import ATable from './cardsItems/ATable.vue';
import TableCustomHeader from '../../../../stubs/components/TableCustomHeader.vue';
import TableCustomCellActions from '../../../../stubs/components/TableCustomCellActions.vue';
import TableExtRowComponent from '../../../../stubs/components/TableExtRowComponent.vue';

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
          title: 'Name',
          headerAlign: 'center',
          dataAlign: 'left',
          // sortControl: true,
          useHeaderComponent: TableCustomHeader,
        },
        {
          key: 'date',
          name: 'date',
          title: 'Date',
          headerAlign: 'center',
          dataAlign: 'left',
        },
        {
          key: 'type',
          name: 'type',
          title: 'Type',
          headerAlign: 'center',
          dataAlign: 'left',
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
      sortParamsDefault: {
        sidx: 'number',
        sord: 'desc',
      },
      sortParams: {
        sidx: '',
        sord: '',
      },
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
  },
};
</script>

<style scoped>
.cards-tabled {
  width: 100%;
  margin-top: 20px;
}

</style>
