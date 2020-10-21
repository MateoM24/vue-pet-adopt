import Vue from 'vue'
import Vuex from 'vuex'

import cats from '@/data/cats'
import dogs from '@/data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },
  mutations: {
    // state object is put here by Vue and pet is my custom object
    append: (state, { species, pet }) => {
      state[species].push(pet)
    }
  },
  actions: {
    // context object is put here by Vue and payload is my custom object
    addPet: (context, payload) => {
      context.commit('append', payload)
    }
  },
  modules: {
  },
  // takes data from state but formats it in custom way
  getters: {
    animalsCount: (state) => {
      return state.cats.length + state.dogs.length
    },
    // good usage example of a getter. Filtering.
    getAllCats: (state) => {
      return state.pets.filter((pet) => pet.species === 'cat')
    }
  }
})
