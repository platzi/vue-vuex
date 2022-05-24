import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '',
      details: {
        id: 1,
        name: 'Diana Nerd',
        avatar: '/avatars/avatar.jpg'
      }
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username
    }
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log('update username action!', state.username, username)
      const user = await getUser(1)
      console.log(user)
      commit(COMMIT_UPDATE_USERNAME, user.username)
      if (state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true })
        console.log('status', rootState.status)
      }
    }
  },
}

export default module