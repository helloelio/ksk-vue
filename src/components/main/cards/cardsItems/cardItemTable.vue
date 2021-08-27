<template>
  <tr class="table-body">
    <td>{{ card.id }}</td>
    <td>{{ card.name }}</td>
    <td>{{ card.type }}</td>
    <td>{{ card.date }}</td>
    <td class="table-buttons">
      <div
        class="card__buttons-table"
        :class="{ bordered: active }">
        <div
          class="card-buttons-menu-table"
          :class="{ shownTable: active }">
          <button
            class="edit-button"
            @click="$emit('edit-card', card), setClass()"
          >
            <svg
              fill="none"
              width="12px"
              height="12px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)" fill="#647A8C">
                <path
                  class="first-part"
                  d="m7.2933 1.8283-6.5379 6.5379-0.74102 3.0178c-0.041508
                  0.1689 0.0083203 0.3473 0.13134 0.4703 0.12342 0.1234 0.30188
                  0.1727 0.47032 0.1313l3.0178-0.741 6.5379-6.5379-2.8784-2.8784zm-6.3352
                  9.2136 0.25478-1.0376 0.78282 0.7829-1.0376 0.2547z"
                />
                <path
                  class="second-part"
                  d="m11.78 2.0348-1.8144-1.8144c-0.29381-0.29381-0.77016-0.29381-1.064
                  0l-0.72246 0.72246 2.8784 2.8784 0.7225-0.72246c0.2938-0.29379
                  0.2938-0.77016 0-1.064z"
                />
              </g>
            </svg>
          </button>
          <button
            class="delete-button"
            @click="$emit('delete-card', card.id)">
            <svg
              width="10px"
              height="12px"
              xmlns="http://www.w3.org/2000/svg">
              <path
                class="first-part"
                d="m8.943 3.3333h-7.8859c-0.23864
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
                fill="#647A8C"
              />
              <path
                class="second-part"
                d="m8.6433
                  0.58036h-1.9536v-0.14092c0-0.24231-0.237-0.43945-0.52831-0.43945h-2.3227c-0.29131
                  0-0.52838 0.19713-0.52838 0.43945v0.14092h-1.9536c-0.74807 0-1.3567
                  0.50619-1.3567 1.1284v0.72358c0 0.1294 0.12612 0.23434 0.28178
                  0.23434h9.4365c0.15557 0
                  0.28169-0.10494
                  0.28169-0.23434v-0.72358c0-0.62219-0.60856-1.1284-1.3567-1.1284z"
                fill="#647A8C"
              />
            </svg>
          </button>
        </div>
        <button
          class="menu-button"
          @click="setClass">
          <img
            src="../../../../assets/menu-icon.svg"
            alt="menu icon"/>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setClass() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
.delete-button:hover .first-part {
  fill: rgba(100, 122, 140, 0.5);
}

.delete-button:hover .second-part {
  fill: rgba(100, 122, 140, 0.5);
}

.delete-button:active .first-part {
  fill: #647a8c;
}

.delete-button:active .second-part {
  fill: #647a8c;
}

.edit-button:hover .first-part {
  fill: rgba(100, 122, 140, 0.5);
}

.edit-button:hover .second-part {
  fill: rgba(100, 122, 140, 0.5);
}

.edit-button:active .first-part {
  fill: #647a8c;
}

.edit-button:active .second-part {
  fill: #647a8c;
}

.card-buttons-menu-table {
  display: none;
  flex-direction: column;
  width: 100%;
}

.delete-button {
  cursor: default;
  position: relative;
  z-index: 2;
}

.edit-button {
  cursor: default;
}

.menu-button {
  margin-right: 20px;
}

.card__buttons-table {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;
  border: 1px solid white;
}

.bordered {
  border: 1px solid #f2f2f2;
  border-radius: 3px;
}

td {
  padding: 10px;
}

.table-body {
  background-color: white;
  border: 1px solid #e6e6e6;
}
</style>
