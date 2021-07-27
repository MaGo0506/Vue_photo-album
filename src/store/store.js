/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {
    blocks: [],
    photos: [],
    active: false,
  },
  actions: {
    loadBlocks({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/albums')
        .then((data) => {
          const blocks = data.data;
          commit('SET_BLOCKS', blocks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadPhotos({ commit }, id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then((data) => {
          const photos = data.data;
          commit('SET_PHOTOS', photos);
        })
        .catch((error) => {
          console.log(error);
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
