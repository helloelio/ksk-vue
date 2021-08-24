<template>
  <div class="modal hidden">
    <div class="modal__content">
      <div class="modal__title">Добавление</div>
      <form action="#" class="create-new-card">
        <label for="card-number">Номер накладной </label>
        <input
          id="card-number"
          type="text"
          placeholder="Введите значение"
          v-model="cardName"
        />
        <label for="create-select">Тип заказа </label>
        <select id="create-select" v-model="cardType">
          <option disabled value="">Выберите тип:</option>
          <option v-for="value in optionValues" :key="value" :value="value">
            {{ value }}
          </option>
        </select>
      </form>
      <div class="modal-buttons">
        <button @click="createCardItem" class="create-card">Добавить</button>
        <button @click="$emit('close-create-modal')" class="close-modal">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreateModal',
  data() {
    return {
      optionValues: ['RUED', 'RUEX', 'RUSG'],
      cardName: '',
      cardType: '',
    };
  },
  methods: {
    createCardItem() {
      const currentDate = new Date();
      const formatedDate = `${currentDate.getDate()}
      - ${(currentDate.getMonth() + 1)}
      - ${currentDate.getFullYear()}`;
      const cardItem = {
        id: this.$store.state.counter,
        name: this.cardName,
        date: formatedDate,
        type: this.cardType,
      };
      if (this.cardName === '' || this.cardType === '') {
        /* eslint-disable */
        alert(this.cardName !== '' ? 'Выберите тип' : 'Введите название');
      } else {
        this.$emit('createCardItem', cardItem);
        this.cardName = '';
        this.cardType = '';
      }
      this.$store.commit('increment');
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.modal {
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

.modal__content {
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: white;
  border-radius: 2px;
  padding: 15px;
}

.modal__title {
  text-align: center;
  padding: 25px 0 20px 0;
}

.create-new-card {
  margin-bottom: 10px;
}

#create-select {
  color: #a5a5a5;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.create-card {
  font-size: 1.2em;
  padding: 10px;
  border-radius: 4px;
  background-color: #4943cd;
  color: white;
}

.create-card:hover {
  background: #3b36a5;
}

.close-modal {
  font-size: 1.2em;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  color: black;
  border: 1px solid white;
  transition: border .2s ease;
}

.close-modal:hover {
  border: 1px solid;
}
</style>
