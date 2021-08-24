<template>
  <div class="card__sort">
    <select
      id="sort-select"
      v-model="sortingByName"
      @change="$emit('sortByName', sortingByName)"
    >
      <option selected disabled value="">Sorting</option>
      <option value="ascending">
        Sort by Invoice number: ascending
      </option>
      <option value="descending">
        Sort by Invoice number: descending
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SortingCards',
  data() {
    return {
      sortingByName: '',
    };
  },
};
</script>

<style scoped>
.card__sort {
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  box-shadow: 0 4px 4px #ebebeb;
}

#sort-select {
  border-radius: 4px;
  margin-left: 20px;
  border: 2px solid gray;
}

#sort-select:focus {
  border: 2px solid #0060df;
  border-radius: 4px;
}
</style>
