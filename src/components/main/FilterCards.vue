<template>
  <div class="card__filter">
    <label class="form__title" for="form">Filters</label>
    <form id="form" action="#">
      <label for="filter-invoice-number">Invoice number</label>
      <input
        id="filter-invoice-number"
        type="text"
        placeholder="Enter value"
        v-model="filterByName"
        @input="$emit('filter-name', filterByName )"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'FilterCards',
  data() {
    return {
      filterByName: '',
    };
  },
};
</script>

<style scoped>
.card__filter {
  max-width: 280px;
  max-height: 155px;
  margin-top: 20px;
  border: 1px solid #f8f8f8;
  box-shadow: 0 4px 4px #ebebeb;
}

.form__title {
  font-size: 1.1em;
  display: block;
  margin-top: 10px;
  padding: 0 30px;
  margin-bottom: 10px;
  font-weight: 700;
}
</style>
