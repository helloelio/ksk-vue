<template>
  <header class="header">
    <h1 class="header__title"> {{ headerTitle }} </h1>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState([
      'headerTitle',
    ]),
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 80px 0;
  flex-grow: 1;
  background: linear-gradient(
    267.21deg,
    #900793 0.16%,
    rgba(134, 4, 137, 0.785707) 0.16%,
    rgba(159, 12, 162, 0.762269) 43.22%,
    rgba(5, 1, 190, 0.734375) 98.12%,
    rgba(0, 28, 126, 0.619792) 100.15%,
    rgba(6, 77, 142, 0.447917) 102.03%,
    rgba(1, 0, 60, 0) 102.73%
  );
}

.header__title {
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.25em;
  color: #ffffff;
  margin-left: 110px;
}

</style>
