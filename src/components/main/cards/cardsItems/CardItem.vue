<template>
  <div class="card" :class="String(card.id)">
    <div class="card__header">
      <div class="card__name">{{ card.name }}</div>
      <div class="card__buttons">
        <div class="card-buttons-menu" :class="{ shown: this.active }">
          <button
            class="edit-btn"
            @click="$emit('open-edit-modal', card), setClass()"
          >
            <img src="../../../../assets/edit-icon.svg" alt="edit icon" />
            <span>редактировать</span>
          </button>
          <button class="delete-btn" @click="$emit('delete-card', card.id)">
            <img src="../../../../assets/delete-icon.svg" alt="close icon" />
            <span>удалить</span>
          </button>
        </div>
        <button class="menu-btn" @click="setClass">
          <img src="../../../../assets/menu-icon-widget.svg" alt="menu icon" />
        </button>
      </div>
    </div>
    <div class="card__body">
      <div class="card__id">ID: {{ card.id }}</div>
      <div class="card__date">Дата: {{ card.date }}</div>
      <div class="card__type">Тип: {{ card.type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  name: 'CardItem',
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

<style scoped>
.shown {
  display: flex !important;
}

.card {
  display: inline-block;
  background: #f6fafb;
  box-shadow: 0 4px 12px #ebebeb;
  border-radius: 3px;
  height: 300px;
  width: 377px;
}

.card__header {
  position: relative;
  background: rgba(237, 232, 245, 0.5);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__name {
  font-size: 1.125em;
  font-weight: 500;
}

/* card body */
.card__body {
  background-color: #f6fafb;
  font-size: 0.875em;
  font-weight: 400;
  padding: 0 20px;
}

.card__id {
  border-bottom: 1px solid #f2f2f2;
  padding: 7px 0;
}

.card__date {
  border-bottom: 1px solid #f2f2f2;
  padding: 7px 0;
}

.card__type {
  border-bottom: 1px solid #f2f2f2;
  padding: 7px 0;
}

/* card body */
.card-buttons-menu {
  display: none;
  position: absolute;
  top: 40px;
  right: 10px;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(182, 182, 182, 0.25);
  border-radius: 5px;
  z-index: 100;
}

.edit-btn {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 7px 10px;
  transition: 0.3s ease;
}

.edit-btn > span {
  margin-left: 5px;
}

.edit-btn:hover {
  background-color: rgb(206, 206, 206);
}

.delete-btn {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 7px 10px;
  transition: 0.3s ease;
}

.delete-btn > span {
  margin-left: 8px;
}

.delete-btn:hover {
  background-color: rgb(206, 206, 206);
}
</style>
