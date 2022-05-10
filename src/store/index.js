import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      username: 'Diana.Nerd'
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    updateUsername({ commit, state }, username) {
      console.log('update username action!', state.username, username)
      commit('updateUsername', username)
    }
  }
})

export default store