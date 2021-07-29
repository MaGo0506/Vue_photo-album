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
<<<<<<< HEAD
    'user-search': userSearch,
    'loader': loader,
=======
    'album-tabs': albumTabs,
    loader,
>>>>>>> b42557dcac50068797ea61c56b31c98cc6854ab1
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">

</style>
