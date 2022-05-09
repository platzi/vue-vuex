<script setup>
defineProps(['avatar', 'author', 'time', 'message', 'is-self'])
</script>

<template>
  <div class="message-item" :class="{ self: isSelf }">
    <div class="author">
      <img :src="avatar" :alt="author" />
    </div>
    <div class="content">
      <div class="details" :class="{ self: isSelf }">
        <h5>{{ author }}</h5>
        <p>{{ time }}</p>
      </div>
      <p class="message" :class="{ self: isSelf }">{{ message }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-item {
  @apply flex gap-3;
  &.self {
    @apply flex-row-reverse;
  }
  .author {
    img {
      @apply w-10 rounded-full;
    }
  }
  .content {
    @apply flex flex-col gap-1;
    .details {
      @apply flex gap-2 items-center;
      &.self {
        @apply justify-end;
      }
      h5 {
        @apply font-bold leading-4;
      }
      p {
        @apply text-sm text-gray-500;
      }
    }
    .message {
      @apply px-4 py-2 max-w-md rounded-2xl rounded-tl-none bg-zinc-800;
      &.self {
        @apply rounded-tl-2xl rounded-tr-none;
      }
    }
  }
}
</style>