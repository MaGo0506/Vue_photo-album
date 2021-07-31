<template>
  <div id="form-input">
    <h1>Sign Up</h1>
    <form @submit="signIn">
      <div class="formContainer">
        <label class="input-label">Username:</label>
        <input
          v-model="username"
          :class="`input-text ${usernameCheck()}`"
          type="text"
          placeholder="username"
        >
        <small :class="`input-message ${usernameCheck()}`">Username has to have at least 6 to 15 characters</small>
      </div>
      <div class="formContainer">
        <label class="input-label">Email:</label>
        <input
          v-model="email"
          :class="`input-text ${emailCheck()}`"
          placeholder="e-mail"
        >
        <small :class="`input-message ${emailCheck()}`">Email must contain @gmail.com</small>
      </div>
      <div class="formContainer">
        <label class="input-label">Password:</label>
        <input
          v-model="password"
          :class="`input-text ${passwordCheck()}`"
          type="password"
          placeholder="password"
        >
        <small :class="`input-message ${passwordCheck()}`">Password must contain one capital letter,
          number and at least 8 characters</small>
      </div>
      <div class="formContainer">
        <label class="input-label">Password-re:</label>
        <input
          v-model="repeatPass"
          :class="`input-text ${repeatPassCheck()}`"
          type="password"
          placeholder="repeat-password"
        >
        <small :class="`input-message ${repeatPassCheck()}`">Passwords do not match</small>
      </div>
      <div class="formContainer">
        <input
          required
          id="js-checkbox"
          class="checkbox"
          type="checkbox"
          v-model="checked"
        >
        <label class="input-label">I agree to the Terms and Conditions</label>
        <small v-if="show">You must check the checkbox</small>
      </div>
      <div class="submitContainer">
        <p
          v-if="show"
          class="successText"
        >
          Your information has been processed successfully!
        </p>
        <input
          type="submit"
          value="Submit"
          class="submit"
        >
      </div>
    </form>
  </div>
</template>

<script>

export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
			repeatPass: '',
			show: false,
      checked: false,
			password_regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/,
			email_regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
		};
	},
	computed: {
	},
	methods: {
		signIn(e) {
			e.preventDefault();
      if (this.usernameCheck() === 'success' && this.emailCheck() === 'success') {
        this.username = '';
        this.email = '';
      }
      if (this.passwordCheck() === 'success' && this.repeatPassCheck() === 'success') {
        this.password = '';
        this.repeatPass = '';
      }
      this.checked = false;
		},
		usernameCheck() {
      return (this.username === '') ? ''
			 : (this.username.length < 6 || this.username.length > 15) ? 'error' : 'success';
		},
		emailCheck() {
			return (this.email === '') ? ''
				: (this.email_regex.test(this.email)) ? 'success' : 'error';
		},
    passwordCheck() {
      return (this.password === '') ? ''
				: (this.password_regex.test(this.password)) ? 'success' : 'error';
    },
    repeatPassCheck() {
       return (this.repeatPass === '') ? ''
				: (this.repeatPass === this.password) ? 'success' : 'error';
    }
	},
};
</script>

<style lang='scss' scoped>

#form-input {
  display: flex;
  justify-content: center;
	background: #fff;
	color: rgb(219, 53, 53);
	display: inline-block;
	padding: 20px;
	margin: 20px 0;
	height: 630px;
  width: 400px;

	h1 {
		text-align: center;
		padding-bottom: 10px;
	}

	.formContainer {
		padding: 10px 0;
	}

	.input-text {
		height: 30px;
		width: 100%;
		padding: 5px;
		font-size: 16px;

     &:focus {
       outline: none;
     }

     &.error {
        border: 3px solid rgb(238, 62, 62);
      }

      &.success {
        border: 3px solid rgb(59, 224, 59);
      }
	}

	.input-label {
		text-align: center;
	}

	.submitContainer {
		padding: 10px 0;
		text-align: center;
	}

	.submit {
		margin-top: 30px;
		color: #fff;
		background: rgb(219, 53, 53);
		border: none;
		width: 100px;
		padding: 10px 0;
		font-size: 20px;
		cursor: pointer;
	}

  .successText {
    color: rgb(55, 196, 55);
  }

  .input-message {
    display: none;

    &.error {
      display: block;
    }
  }
}

</style>
