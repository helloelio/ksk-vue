<template>
  <div id="app">
    <Header/>
    <ModalWindow
      @createCardItem="addCardItem"
      @editCardItem="editCardItem"
      @close-create-modal="closeCreateModal"
      @close-edit-modal="closeEditModal"
    />
    <div class="container">
      <Main @open-create-modal="openCreateModal"/>
    </div>
  </div>
</template>

<script>
import Header from './components/TheHeader.vue';
import Main from './components/TheMain.vue';
import ModalWindow from './components/ModalWindow.vue';

export default {
  components: {
    Header,
    Main,
    ModalWindow,
  },
  data() {
    return {
      filterName: '',
    };
  },
  methods: {
    addCardItem(cardItem) {
      this.$store.commit('ADD_CARD', cardItem);
      this.closeCreateModal();
    },
    editCardItem(editedCardItem) {
      this.$store.commit('editing', editedCardItem);
    },
    openCreateModal() {
      this.$store.state.readyToEdit = 'notReady';
    },
    closeCreateModal() {
      this.$store.state.readyToEdit = '';
    },
    closeEditModal() {
      this.$store.state.readyToEdit = '';
    },
  },
};
</script>

<!--TODO: fix editing and make add and edit component in one -->

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
  border: 1px solid #d9d9d9;
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

.table-edit-panel {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #a5a5a5;
  border-radius: 4px;
}

.delete-button {
  margin-left: 10px;
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
  .cards {
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
