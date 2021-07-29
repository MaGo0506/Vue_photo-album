/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { store } from './store/store';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
});

new Vue({
	store,
	el: '#app',
	render: (h) => h(App),
});
