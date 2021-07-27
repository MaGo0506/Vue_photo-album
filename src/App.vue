<template>
  <div id="app">
    <loader></loader>
    <album-tabs></album-tabs>
  </div>
</template>

<script>
import albumTabs from './components/albumTabs.vue';
import loader from './components/loader.vue';

export default {
  name: 'app',
  components: {
    'album-tabs': albumTabs,
    'loader': loader,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
