<template>
  <div id="app">
    <loader />
    <form-validation />
  </div>
</template>

<script>
import formValidation from './components/formValidation.vue';
import loader from './components/loader.vue';

export default {
	name: 'App',
	components: {
		'form-validation': formValidation,
		loader,
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background: rgb(219, 53, 53);
  display: inline-flex;
  justify-content: center;

}

</style>
