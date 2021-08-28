<template>
  <div class="card__create">
    <div class="card__button">
      <button
        class="add-button"
        @click="$emit('open-create-modal')"
      ><img
        src="../../assets/plus.svg"
        alt="plus icon"
      >Добавить
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddButton',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setClass() {
      this.active = true;
    },
  },
};
</script>

<style scoped>
.card__create {
  max-width: 280px;
}

.add-button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: #4943cd;
  color: white;
  box-shadow: 0 4px 4px #ebebeb;
  border-radius: 2px;
  padding: 28px 75px;
  transition: 0.3s ease;
  font-weight: 700;
}

.add-button img {
  margin-right: 10px;
}

.add-button:hover {
  background: #3b36a5;
}
</style>
