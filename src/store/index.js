import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isDesktop: true,
}

const mutations = {
  SET_DEVICE(state, value) {
    state.isDesktop = value
  },
}

const actions = {
  resize(context) {
    if (window.innerWidth > 768) {
      context.commit('SET_DEVICE', true)
    } else {
      context.commit('SET_DEVICE', false)
    }
  },
}

export default new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions,
  modules: {},
})
