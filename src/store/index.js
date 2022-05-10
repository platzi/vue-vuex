import { createStore } from 'vuex'
import profile from '@/store/modules/profile'
import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

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