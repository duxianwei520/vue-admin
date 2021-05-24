import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    username: 'dupi'
  },
  mutations: {
    increment (state) {
      state.count += 1
    },
    changeUsername (state, payload) {
      // console.log(state)
      // console.log(payload)
      state.username = payload
    }
  },
  actions: {
    changeUsername (state, payload) {
      // console.log(state)
      // console.log(payload)
      state.state.username = payload.payload
    }
  },
  modules: {
  }
})
