const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: 'Canal 1', messages: [] },
        { id: 2, name: 'Canal 2', messages: [] },
        { id: 3, name: 'Canal 3', messages: [] },
        { id: 4, name: 'Canal 4', messages: [] },
      ]
    }
  },
  getters: {
    getChannels: (state) => (search) => {
      return state.channels.filter((channel) => channel.name.toLowerCase().includes(search.toLowerCase()))
    }
  }
}

export default module
