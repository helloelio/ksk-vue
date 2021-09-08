<template>
  <div class="modal-window">
    <div
      class="modal-edit hidden"
      v-if="readyToEdit === 'ready'"
      :class="{ 'shown-edit-modal': readyToEdit === 'ready' }"
    >
      <div class="modal-edit__content">
        <div class="modal-edit__title">Редактирование</div>
        <form action="#" class="edit-card-form">
          <label for="edit-card-number">Номер накладной </label>
          <input
            id="edit-card-number"
            type="text"
            placeholder="Введите значение"
            v-model="setNewCardName"
          />
          <label for="edit-select">Тип заказа </label>
          <select id="edit-select" v-model="setNewCardType">
            <option disabled value="">Выберите тип:</option>
            <option v-for="value in optionValues" :key="value" :value="value">
              {{ value }}
            </option>
          </select>
        </form>
        <div class="modal-buttons">
          <button class="edit-card" @click="editCard">Редактировать</button>
          <button class="close-modal" @click="$emit('close-edit-modal')">
            Отмена
          </button>
        </div>
      </div>
    </div>
    <!--    ########################    -->
    <div
      class="modal hidden"
      v-else-if="readyToEdit === 'notReady'"
      :class="{ 'shown-create-modal': readyToEdit === 'notReady' }"
    >
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
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'CreateModal',
  data() {
    return {
      cardName: '',
      cardType: '',
      newCardType: '',
    };
  },
  computed: {
    ...mapGetters([
      'optionValues', 'readyToEdit',
    ]),
    setNewCardName: {
      get() {
        return this.$store.state.newCardName;
      },
      set(event) {
        this.$store.commit('setNewCardName', event);
      },
    },
    setNewCardType: {
      get() {
        return this.$store.state.newCardType;
      },
      set(event) {
        this.$store.commit('setNewCardType', event);
      },
    },
  },
  methods: {
    createCardItem() {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}
      - ${(currentDate.getMonth() + 1)}
      - ${currentDate.getFullYear()}`;
      const cardItem = {
        id: this.$store.state.counter,
        pos: this.$store.state.counter,
        name: this.cardName,
        date: formattedDate,
        type: this.cardType,
      };
      if (this.cardName === '' || this.cardType === '') {
        /* eslint-disable */
        alert(this.cardName !== '' ? 'Выберите тип' : 'Введите название');
      } else {
        this.$emit('createCardItem', cardItem);
        this.$store.commit('increment');
        this.cardName = '';
        this.cardType = '';
      }
    },
    editCard() {
      const newCardItem = {
        name: this.setNewCardName,
        type: this.newCardType,
      };
      if (this.setNewCardName === '') {
        alert(this.setNewCardName !== '' ? 'Выберите тип' : 'Введите название');
      } else {
        this.$emit('editCardItem', newCardItem);
      }
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.shown-create-modal {
  display: flex !important;
}

.shown-edit-modal {
  display: flex !important;
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
  transition: border 0.2s ease;
}

.close-modal:hover {
  border: 1px solid;
}

.hidden {
  display: none;
}

/* edit modal */
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
}

.edit-card:hover {
  background: #3b36a5;
}

.edit-card-form {
  margin-bottom: 10px;
}
</style>
