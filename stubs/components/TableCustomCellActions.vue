<template>
  <td>
    <div
      class="table-edit-panel"
      :item="item"
      :class="rowHovered ? 'hoveredMenu' : null"
    >
      <button
        :title="getMessageByKey('ext-panel')"
        @mouseover="toggleRowHover(true)"
      >
        <table-menu-icon />
      </button>
      <div v-if="rowHovered" class="howeredActions">
        <button class="edit-button" @click="edited">
          <table-edit-icon />
        </button>
        <button class="delete-button" @click="deleteTableItem">
          <table-delete-icon />
        </button>
      </div>
    </div>
  </td>
</template>

<script>
import TableMenuIcon from '../../src/assets/svgs/table-icons/TableMenuIcon.vue';
import TableEditIcon from '../../src/assets/svgs/table-icons/TableEditIcon.vue';
import TableDeleteIcon from '../../src/assets/svgs/table-icons/TableDeleteIcon.vue';

export default {
  name: 'TableCustomCellActions',
  components: {
    TableMenuIcon,
    TableEditIcon,
    TableDeleteIcon,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    rowHovered: {
      type: Boolean,
      default: false,
    },
    toggleRowHover: {
      type: Function,
      default: () => null,
    },
  },
  methods: {
    deleteTableItem() {
      this.$store.commit('DELETE_CARD', this.item);
    },
    edited() {
      this.$store.commit('EDIT_CARD', this.item);
      this.$store.state.readyToEdit = 'ready';
    },
  },
};
</script>
<style scoped>
.hoveredMenu {
  border: 1px solid #111;
}
.table-edit-panel {
  position: relative;
}
.howeredActions {
  position: absolute;
  left: 10%;
  top: -3px;
}
</style>
