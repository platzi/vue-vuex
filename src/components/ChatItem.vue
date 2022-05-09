<script setup>
import { RouterLink } from 'vue-router'
defineProps(['id', 'name', 'messages'])
</script>

<template>
  <RouterLink 
    :to="`${id}`"
    class="chat-item"
  >
    <h5>{{ name }}</h5>
    <div class="badge" v-if="messages">{{ messages }}</div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.chat-item {
  @apply flex px-3 py-2 text-neutral-800 rounded-lg hover:bg-neutral-900;
  h5 {
    @apply w-full text-neutral-300;
  }
  .badge {
    @apply flex justify-center items-center leading-none font-bold text-xs px-3 text-gray-200 rounded-2xl bg-neutral-600;
  }
}
</style>