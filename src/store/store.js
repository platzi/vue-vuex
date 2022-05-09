import { reactive } from 'vue'

const store = reactive({
  username: 'diana.nerd',
  updateUsername(username) {
    this.username = username
  }
})

export default store