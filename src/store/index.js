import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      username: 'Diana.Nerd'
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').reverse().join(c)
    }
  }
})

export default store