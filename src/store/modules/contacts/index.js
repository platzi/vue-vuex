const module = {
  namespaced: true,
  state() {
    return {
      contacts: [
        { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
      ]
    }
  },
  getters: {
    getContacts: (state) => {
      return state.contacts
    },
    getContactById: (state, getters, rootState) => (contactId) => {
      const profileId = rootState.profile.id
      if (contactId === profileId) return rootState.profile.details
      return state.contacts.find((contact) => {
        return contact.id === contactId
      })
    }
  }
}

export default module