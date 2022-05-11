const getters = {
  getMessages(state) {
    return state.messages
  },
  getMessage: (state) => (id) => {
    return state.messages.find((message) => message.id === id)
  }
}

export default getters