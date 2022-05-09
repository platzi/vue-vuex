<script>
import MessageItem from '@/components/MessageItem.vue'

export default {
  components: {
    MessageItem
  },
  data() {
    return {
      title: 'Nombre del canal',
      people: [
        { id: 1, name: 'Tú', avatar: '/avatars/avatar.jpg' },
        { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
      ],
      messages: [
        { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString() },
        { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString() },
        { id: 3, author: 3, message: 'Hola a todo el mundo 😊', timestamp: new Date().toLocaleTimeString() },
        { id: 4, author: 3, message: '¿Cómo están?', timestamp: new Date().toLocaleTimeString() },
        { id: 5, author: 1, message: 'Todo muy bien :D', timestamp: new Date().toLocaleTimeString() },
        { id: 6, author: 2, message: 'Si, todo bien.', timestamp: new Date().toLocaleTimeString() },
        { id: 7, author: 1, message: 'Oigan, les escribo para contarles algo... 😌', timestamp: new Date().toLocaleTimeString() },
        { id: 8, author: 3, message: 'A vers 👀', timestamp: new Date().toLocaleTimeString() },
        { id: 9, author: 2, message: 'Ahhhh!!', timestamp: new Date().toLocaleTimeString() },
        { id: 10, author: 2, message: '¡Cuenta ese chismesito yaaaa!', timestamp: new Date().toLocaleTimeString() },
        { id: 11, author: 1, message: 'Pues, ¡acabamos de lanzar los nuevos cursos de Vue.js!', timestamp: new Date().toLocaleTimeString() },        
      ]
    }
  },
  computed: {
    messagesView() {
      return this.messages.map((message) => {
        const author = this.people.find((p) => p.id === message.author)
        if (!author) return message;
        return {
          ...message,
          author,
          self: author.id === 1
        }
      })
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.scrollToBottom()
      }
    }
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    scrollToBottom() {
      this.$refs?.end?.scrollIntoView({
          behavior: 'smooth'
      })
    }
  },
}
</script>

<template>
  <div class="messages">
    <header>
      <h2>{{ title }}</h2>
      <div class="people-list">
        <div
          class="people-item"
          v-for="p in people"
          :key="p.id"
        >
          <img :src="p.avatar" :alt="p.name" />
        </div>
      </div>
    </header>
    <div class="content">
      <MessageItem
        v-for="message in messagesView"
        :key="message.id"
        :avatar="message.author.avatar"
        :author="message.author.name"
        :message="message.message"
        :time="message.timestamp"
        :is-self="message.self"
      />
      <span ref="end"></span>
    </div>
    <footer>
      <textarea rows="3"></textarea>
      <button>
        <Icon icon="carbon:send-alt" />
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.messages {
  @apply flex flex-col h-full;
  header {
    @apply flex justify-between items-center px-6 py-2;
    h2 {
      @apply font-bold text-2xl;
    }
    .people-list {
      @apply flex gap-1;
      .people-item {
        @apply flex justify-center items-center border-4 border-neutral-700 rounded-full;
        img {
          @apply w-8 rounded-full;
        }
      }
    }
  }
  .content {
    @apply flex flex-col gap-4 p-4 h-full overflow-y-auto;
  }
  footer {
    @apply flex p-2;
    textarea {
      @apply w-full px-2 py-2 resize-none bg-zinc-800 rounded-tl-md rounded-bl-md focus:outline-none;
    }
    button {
      @apply flex justify-center items-center px-4 bg-zinc-800 hover:bg-zinc-700 rounded-tr-md rounded-br-md text-2xl;
    }
  }
}
</style>