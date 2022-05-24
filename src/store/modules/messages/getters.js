const getters = {
<<<<<<< HEAD
  getMessages: (state) => (channelId) => {
    return state.messages.filter((message) => message.channelId === parseInt(channelId))
  },
  getUnreadMessages: (state, getters) => (channelId) => {
    return getters.getMessages(channelId).filter((message) => message.read === false).length
=======
  getMessages(state) {
    return state.messages
  },
  getMessage: (state) => (id) => {
    return state.messages.find((message) => message.id === id)
>>>>>>> 17-messages
  }
}

export default getters