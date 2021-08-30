<template>
  <td>
    <div class="table-edit-panel" :item="item">
      <button
        :title="getMessageByKey('ext-panel')"
        @mouseover="toggleRowHover(true)"
      >
        edit-panel
      </button>
      <div v-if="rowHovered">
        <button
          class="edit-button"
          @click="edited"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M7.29328 1.82832L0.755391 8.36621L0.0143679 11.384C-0.02714 11.5529
            0.0226882 11.7313 0.145712 11.8543C0.269133 11.9777 0.447587 12.027 0.616032
            11.9856L3.63382 11.2446L10.1717 4.70672L7.29328 1.82832ZM0.958055 11.0419L1.21284
            10.0043L1.99566 10.7872L0.958055 11.0419Z" fill="#647A8C"/>
              <path d="M11.7797 2.0348L9.96526 0.220359C9.67145 -0.0734531 9.1951
            -0.0734531 8.90129 0.220359L8.17883 0.94282L11.0572 3.82123L11.7797 3.09877C12.0735
            2.80498 12.0735 2.32861 11.7797 2.0348Z" fill="#647A8C"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="delete-button" @click="deleteTableItem">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="m8.943 3.3333h-7.8859c-0.23864
              0-0.4321 0.18097-0.4321 0.40426v6.3156c0
              1.0735 0.93341 1.9468 2.0806 1.9468h4.5887c1.1473
              0 2.0807-0.8733
              2.0807-1.9468v-6.3156c0-0.22323-0.19335-0.40426-0.43198-0.40426zm-4.9817 6.2318c0
              0.27427-0.23761 0.49661-0.53086 0.49661-0.29306
              0-0.53085-0.22234-0.53085-0.49661v-3.7968c0-0.27433
              0.23773-0.49666 0.53085-0.49666 0.29319 0 0.53086
              0.22239 0.53086 0.49666v3.7968zm3.1391 0c0
              0.27427-0.23767 0.49661-0.53085 0.49661-0.29307
              0-0.53086-0.22234-0.53086-0.49661v-3.7968c0-0.27433
              0.23773-0.49666 0.53086-0.49666 0.29318 0 0.53085
              0.22239 0.53085 0.49666v3.7968z"
                  fill="#647A8C"/>
            <path d="m8.6433
              0.58036h-1.9536v-0.14092c0-0.24231-0.237-0.43945-0.52831-0.43945h-2.3227c-0.29131
              0-0.52838 0.19713-0.52838 0.43945v0.14092h-1.9536c-0.74807 0-1.3567
              0.50619-1.3567 1.1284v0.72358c0 0.1294 0.12612 0.23434 0.28178
              0.23434h9.4365c0.15557 0
              0.28169-0.10494
              0.28169-0.23434v-0.72358c0-0.62219-0.60856-1.1284-1.3567-1.1284z"
                  fill="#647A8C"/>
          </svg>
        </button>
      </div>
    </div>
  </td>
</template>

<script>
export default {
  name: 'TableCustomCellActions',

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
