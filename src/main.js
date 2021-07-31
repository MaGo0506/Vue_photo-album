/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import { store } from './store/store';


Vue.use(VueResource);
Vue.use(Vuelidate);

Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.background = `#${Math.random().toString().slice(2, 8)}`;
	},
});

new Vue({
	store,
	el: '#app',
	render: (h) => h(App),
});
