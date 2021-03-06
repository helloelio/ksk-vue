<template>
  <table class="a-table">
    <a-table-header
      :headers="getHeaders"
      :sortParams="sortParams"
      :sortParamsDefault="sortParamsDefault"
      @onChangeSort="onChangeSort"
    ></a-table-header>
    <template v-for="item in items">
      <a-table-row
        :actionClick="actionClick"
        :class="getRowClassesByItem(item)"
        :item="item"
        :headers="getHeaders"
        :key="item.id + '-row'"
        :ref="item.id + '-row'"
      ></a-table-row>
      <a-table-wide-row
        :component="useExtRowComponent"
        :extData="item.extData"
        :headers="getHeaders"
        :id="item.id"
        :key="item.id + '-ext-row'"
        @onChangeHovered="onChangeHoveredRow"
        v-if="item.extData"
      ></a-table-wide-row>
    </template>
  </table>
</template>

<script>
import ATableHeader from './ATableHeader.vue';
import ATableRow from './ATableRow.vue';
import ATableWideRow from './ATableWideRow.vue';

export default {
  name: 'ATable',
  components: {
    ATableHeader,
    ATableRow,
    ATableWideRow,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
    sortParams: {
      type: Object,
      default() {
        return {};
      },
    },
    sortParamsDefault: {
      type: Object,
      default() {
        return {};
      },
    },
    actionClick: {
      type: Function,
      default() {},
    },
    useExtRowComponent: {
      type: Object,
      default() {
        return null;
      },
    },
    getRowClassesByItem: {
      type: Function,
      default() {},
    },
  },

  computed: {
    getHeaders() {
      const headers = [];
      const headersPositionEnd = [];
      this.headers.forEach((header) => {
        if (header.position && header.position === 'afterAll') {
          headersPositionEnd.push(header);
        } else {
          headers.push(header);
        }
      });
      return headers.concat(headersPositionEnd);
    },
  },

  methods: {
    onChangeSort(data) {
      this.$store.commit('SORTING_ITEMS_TABLE', data);
    },
    onChangeHoveredRow(params) {
      if (params.hovered) {
        this.$refs[`${params.id}-row`][0].$el.classList.add('hovered-ext');
      } else {
        this.$refs[`${params.id}-row`][0].$el.classList.remove('hovered-ext');
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../../assets/font-awesome/css/font-awesome.min.css";

$rowBgColor: #fff;
$rowBorderColorNormal: #e4e8ea;
$rowBorderColorActive: #d3d7d9;
$rowShadowColorActive: #babdbd;
$tableTextColor: #dfdfdf;
$headerColor: white;
$headerBgColor: #306e98;
$headerBgHoveredColor: rgba(26, 82, 119, 0.5);
$mainBbColor: #fefefe;
.a-table-container {
  overflow-x: auto;
}

.a-table {
  width: 100%;
  color: #202124;

  .a-header {
    background: $headerBgColor;
    border-radius: 4px;

    th {
      padding: 5px 15px;
      border-bottom: 1px solid $mainBbColor;
      position: relative;

      &:not(:first-child) {
        border-left: 1px solid $mainBbColor;
      }

      &:first-child div {
        white-space: nowrap;
      }

      &.width-1 {
        width: 1em;
      }

      &.width-4 {
        width: 4em;
      }
    }

    .with-control {
      cursor: pointer;

      &:hover {
        background: $headerBgHoveredColor;
      }

      div {
        cursor: pointer;
      }
    }

    div {
      display: inline-block;
      vertical-align: middle;
      word-break: normal;
      font-weight: normal;
      cursor: default;
      color: $headerColor;
    }

    .sort-control {
      background: 0;
      color: $headerColor;
      margin-left: 5px;
      text-align: center;
      padding: 0;
      display: inline-block;
      border: none;
      opacity: 0.25;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 5px;
    }

    .active-ctrl {
      opacity: 1;
      color: $headerColor;
    }
  }

  .a-table-row {
    background-color: $rowBgColor;
    transition: all 0.25s ease-in, border 0s;

    &:first-child {
      border-bottom: 2px solid $mainBbColor;
    }

    &:not(:first-child) {
      cursor: default;

      td {
        border-top: 1px solid $rowBorderColorNormal;
      }
    }

    &:hover:not(:first-child) {
      border-collapse: separate;
    }

    &:last-child {
      td {
        border-bottom: 1px solid $rowBorderColorNormal;
        width: 100px;
      }
    }
  }

  td {
    padding: 5px 10px;
    vertical-align: top;
    line-height: 1.5;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    border-collapse: collapse;
    word-break: normal;

    &:before {
      content: " ";
    }

    &.order-col {
      span {
        &:after {
          content: ".";
        }
      }
    }
  }

  .a-table-row-wide {
    cursor: default;
    border-top: 1px solid $rowBorderColorNormal;
  }

  .mobile-col {
    display: none;
  }
}

@media (max-width: 760px) {
  .a-table {
    .a-header {
      display: table-row;
    }

    th {
      display: none;

      &.order-col {
        display: table-cell;
      }

      &.width-1 {
        width: 4em;
      }

      &.width-4 {
        width: 4em;
      }

      &.mobile-col {
        display: table-cell;
      }
    }

    tr {
      display: table-row;
      border-bottom: 1px solid gray;
      padding: 10px;
    }

    .a-table-row {
      &:not(:first-child) td {
        border-top: 0 solid #e4e8ea;
      }

      &:last-child td {
        border-bottom: 0 solid #e4e8ea;
      }
    }

    td {
      display: block;
      padding: 0 0 10px 0;

      &:not(.no-info) {
        &:before {
          content: attr(data-th) ": ";
          display: inline-block;
          font-weight: bold;
          margin-right: 3px;
        }
      }

      &.order-col {
        padding: 5px;

        &:before {
          display: none;
        }
      }

      &.text-right {
        text-align: left;
      }

      &.text-center {
        text-align: left;
      }

      &.m-text-center {
        text-align: center;
      }

      &.m-text-right {
        text-align: right;
      }

      &.order-col {
        display: table-cell;
      }
    }
  }
}
</style>
