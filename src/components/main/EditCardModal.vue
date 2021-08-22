<template>
  <div class="modal-edit hidden">
    <div class="modal-edit__content">
      <div class="modal-edit__title">Редактирование</div>
      <form action="#" class="edit-card-form">
        <label for="edit-card-number">Номер накладной </label>
        <input
          id="edit-card-number"
          type="text"
          placeholder="Введите значение"
          v-model="cardName"
        />
        <label for="edit-select">Тип заказа </label>
        <select
          id="edit-select"
          v-model="cardType"
        >
          <option disabled value="">Выберите тип:</option>
          <option
            v-for="value in optionValues"
            :key="value"
            :value="value"

          > {{ value }}
          </option>
        </select>
      </form>
      <button
        @click="editCardItem"
        class="edit-card"
      >Редактировать
      </button>
    </div>
    <span class="close" @click="$emit('close-edit-modal')">×</span>
  </div>
</template>

<script>
export default {
  props: ['counter'],
  name: 'EditCardModal',
  data() {
    return {
      optionValues: ['RUED', 'RUEX', 'RUSG'],
      cardName: '',
      cardType: '',
    };
  },
  methods: {
    editCardItem() {
      const editedCardItem = {
        name: this.cardName,
        type: this.cardType,
        id: this.counter,
      };
      this.$emit('edit-card-item', editedCardItem);
      this.cardName = '';
      this.cardType = '';
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.modal-edit {
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;
}

.modal-edit__content {
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: white;
  border-radius: 2px;
  padding: 15px;
}

.modal-edit__title {
  text-align: center;
  padding: 25px 0 20px 0;
}

#edit-select {
  color: #a5a5a5;
}

.edit-card {
  font-size: 1.2em;
  padding: 10px;
  border-radius: 4px;
  background-color: #4943cd;
  color: white;
  margin: 0 auto;
}

.edit-card:hover {
  background: #3b36a5;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2.5em;
  color: white;
  cursor: pointer;
}
</style>
