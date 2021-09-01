<template>
  <tr
    @mouseover="addExtRowHoverClass"
    @mouseleave="removeExtRowHoverClass"
    class="a-table-row-wide"
  >
  </tr>
</template>

<script>
export default {
  name: 'ATableWideRow',

  props: {
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    addExtRowHoverClass() {
      this.$emit('onChangeHovered', { id: this.id, hovered: true });
    },

    removeExtRowHoverClass() {
      this.$emit('onChangeHovered', { id: this.id, hovered: false });
    },
  },
};
</script>
