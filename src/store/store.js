/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
	state: {
		blocks: [],
		photos: [],
	},
	actions: {
		loadBlocks({ commit }) {
			axios
				.get('https://jsonplaceholder.typicode.com/albums')
				.then((response) => {
					commit('SET_BLOCKS', response.data);
				});
		},
		loadPhotos({ commit }, id) {
			axios
				.get(`https://jsonplaceholder.typicode.com/album/${id}/photos`)
				.then((response) => {
					commit('SET_PHOTOS', response.data);
				});
		},
	},
	mutations: {
		SET_BLOCKS(state, blocks) {
			state.blocks = blocks;
		},
		SET_PHOTOS(state, photos) {
			state.photos = photos;
		},
	},
});
