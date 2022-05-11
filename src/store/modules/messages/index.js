import getters from './getters'

const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: 'Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: true
        },
        {
          id: 2,
          author: 1,
          message: 'Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false
        },
      ]
    }
  },
  getters
}

export default module