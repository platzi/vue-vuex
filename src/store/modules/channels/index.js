const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: 'Canal 1', messages: [1, 2] },
        { id: 2, name: 'Canal 2', messages: [] },
        { id: 3, name: 'Canal 3', messages: [] },
        { id: 4, name: 'Canal 4', messages: [] },
      ]
    }
  },
  getters: {
    getChannels: (state, getters, rootState, rootGetters) => (search) => {
      return state.channels
        .filter(
          (channel) =>
            channel.name
              .toLowerCase()
              .includes(search.toLowerCase())
        )
        .map((channel) => {
          const messages = channel.messages.map((id) => rootGetters['messages/getMessage'](id))
          return {
            ...channel,
            messagesCount: messages.filter((msg) => msg.read === false).length
          }
        })
    }
  }
}

export default module
