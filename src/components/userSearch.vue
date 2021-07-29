<template>
  <div id="search-users">
    <h1>Search for Users</h1>
    <input
      v-model="search"
      type="text"
      placeholder="Search users..."
    >
    <div class="matchList">
      <a
        target="_blank"
        :href="linkTo(capitalizeWords(search))"
      >{{ search }}</a>
    </div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			search: '',
		};
	},
	computed: {
	},
	methods: {
		linkTo(searchInput) {
			const link = `https://jsonplaceholder.typicode.com/users?username=${searchInput}`;
			return link;
		},
		capitalizeWords(string) {
			return string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
		},
	},
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Lekton&display=swap');
body {
  background: purple;
  box-sizing: border-box;
  font-family: 'Lekton', sans-serif;
}

#search-users{
  text-align: center;

  h1 {
    color: white;
    font-size: 42px;
  }

  input {
    padding: 10px 0;
    width: 300px;
    border-radius: 10px;
    border: 5px solid rgb(75, 75, 201);
    font-size: 20px;
    text-align: center;
    outline: none;
  }

  .matchList {
    font-size: 20px;
    background: #fff;
    display: block;
    width: 300px;
    padding: 0px 0;
    margin: 0px auto;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
}

</style>
