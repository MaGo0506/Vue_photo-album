<template>
  <div id="app">
    <user-search></user-search>
    <loader></loader>
  </div>
</template>

<script>
import userSearch from './components/userSearch.vue';
import loader from './components/loader.vue';

export default {
  name: 'app',
  components: {
    'user-search': userSearch,
    'loader': loader,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">

</style>
