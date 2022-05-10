import { createStore } from 'vuex'
import profile from '@/store/modules/profile'

const store = createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    profile
  }
})

export default store