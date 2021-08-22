<template>
  <div id="app">
    <Header></Header>
    <CreateCardModal
      @createCardItem="addCardItem"
      @close-create-modal="closeCreateModal"/>
    <EditCardModal
      @edit-card-item='editCardItem'
      @close-edit-modal="closeEditModal"
      :counter="this.counter"
    />
    <div class="container">
      <Main
        @open-create-modal="openCreateModal"
        @open-edit-modal="openEditModal"
        @delete-card="deleteCard"
        :cards="cards"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import CreateCardModal from './components/CreateCardModal.vue';
import EditCardModal from './components/main/EditCardModal.vue';

export default {
  components: {
    Header,
    Main,
    CreateCardModal,
    EditCardModal,
  },
  data() {
    return {
      counter: 0,
      cards: [],
      filterName: '',
    };
  },
  methods: {
    addCardItem(cardItem) {
      this.cards.push(cardItem);
      this.closeCreateModal();
      this.counter += 1;
    },
    editCardItem(editCardItem) {
      /* eslint-disable */
      this.cards.forEach((card) => {
        if (card.id === editCardItem.id) {
          card.name = editCardItem.name;
          card.type = editCardItem.type;
        } else {
          return;
        }
      });
      this.closeEditModal();
    },
    deleteCard(idToDelete) {
      this.cards = this.cards.filter((card) => card.id !== idToDelete);
    },
    // filters
    filterByName() {
    },
    // sorting
    openEditModal() {
      document.querySelector('.modal-edit').classList.remove('hidden');
      document.querySelector('.modal-edit').classList.add('shown-edit-modal');
    },
    openCreateModal() {
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.modal').classList.add('shown-create-modal');
    },
    closeCreateModal() {
      document.querySelector('.modal').classList.add('hidden');
      document.querySelector('.modal').classList.remove('shown-create-modal');
    },
    closeEditModal() {
      document.querySelector('.modal-edit').classList.remove('shown-edit-modal');
      document.querySelector('.modal-edit').classList.add('hidden');
    },
    //  updates
    updateCardName(newCardName) {
      this.cardName = newCardName.name;
    },
    updateCardType(newCardType) {
      this.cardType = newCardType.type;
    },
  },
};
</script>

<!--TODO: make = editCardModal, make = sorting, make = filter, fix buttons style for tables -->

<style lang="scss">
.routes {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.nav-link {
  color: rgb(56, 56, 56);
  text-decoration: none;
  height: 40px;
  width: 40px;
}

.router-link-active {
  background-color: #e5e9ec;
  border-radius: 0;
}

.shown-create-modal {
  display: flex !important;
}

.shown-edit-modal {
  display: flex !important;

}

.shownTable {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-evenly;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

button {
  font-family: inherit;
  background: none;
  border: none;
  cursor: pointer;
}

input {
  margin-bottom: 17px;
  padding: 5px;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
}

input:focus {
  border: 1px solid #0060df;
  outline: #0060df;
}

input[type="checkbox"] {
  margin-left: 20px;
  margin-bottom: 0;
}

select {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 5px;
}

select:focus {
  border: 1px solid #0060df;
  border-radius: 4px;
  outline: #0060df;
}

label {
  font-size: 0.875em;
  font-weight: 500;
  padding-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  border: 1px solid #f8f8f8;
  padding: 20px 30px;
  margin-top: 10px;
}

table {
  width: 100%;
}

.container {
  max-width: 1440px;
  margin: 30px auto;
}

.left-side {
  display: grid;
  grid-template-rows: 70px 1fr;
}

.right-side-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.right-side {
  display: grid;
  grid-template-rows: auto 1fr;
  margin-left: 20px;
}

@media only screen and (max-width: 1200px) {
  .header {
    text-align: center;
  }
  .header__title {
    margin: 0;
  }
  .container {
    padding: 10px;
  }
  .right-side {
    margin: 0;
  }
  .cards__item {
    width: 300px;
  }
  .card__create {
    max-width: 100%;
  }
  .card__filter {
    max-width: 100%;
  }
}
</style>
