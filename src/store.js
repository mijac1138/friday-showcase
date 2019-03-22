import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4';
import firebase from 'firebase/app';
import 'firebase/database'

Vue.use(Vuex)

window.fb = firebase

firebase.initializeApp({
  apiKey: 'AIzaSyDwNth_KHplWXeFd0PqlVCwWU5uxJfMkKU',
  authDomain: 'friday-showcase.firebaseapp.com',
  databaseURL: 'https://friday-showcase.firebaseio.com',
  projectId: 'friday-showcase',
})

const store = new Vuex.Store({
  state: {
    showcases: []
  },
  mutations: {
    addShowcase (state, showcase) {
      state.showcases = [
        ...state.showcases,
        showcase
      ]
    },
    deleteShowcase(state, id) {
      state.showcases = state.showcases.filter(s => s.id !== id)
    }
  },
  actions: {
    addShowcase ({ commit }, payload) {
      const id = uuid()
      firebase.database().ref(id).set({ ...payload })
        .then(() => commit('addShowcase', { ...payload, id }))
    },
    getShowcases ({ commit, state }) {
      state.showcases = []
      firebase.database().ref().once('value').then(snapshot => {
        const showcases = snapshot.val()
        if (showcases) {
          Object.keys(showcases).forEach(id => {
            commit('addShowcase', {
              ...showcases[id],
              id
            })
          })
        }
      })
    },
    deleteShowcase ({ commit }, id) {
      firebase.database().ref(id).remove().then(() => {
        commit('deleteShowcase', id)
      })
    }
  }
})

export default store
