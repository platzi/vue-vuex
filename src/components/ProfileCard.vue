<script setup>
import { toRefs, computed } from 'vue'

const props = defineProps({
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/500'
  },
  username: {
    type: String,
    default: 'Username'
  },
  status: {
    type: String,
    default: null
  }
})

const { status } = toRefs(props)

const statusText = computed(
  () => status.value === 'active' ? 'Activo' : 'Inactivo'
)
</script>

<template>
  <div class="profile-card">
    <div class="avatar">
      <img :src="avatar" alt="Avatar" />
    </div>
    <div class="details">
      <h4>{{ username }}</h4>
      <div
        class="status"
        :class="{ active: status === 'active' }"
      >
        {{ statusText }}
      </div>
    </div>
    <div class="action">
      <RouterLink to="/profile">
        <Icon class="icon" icon="carbon:overflow-menu-vertical" />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-card {
  @apply flex rounded-xl text-zinc-400 bg-zinc-700 items-center;
  .avatar {
    @apply w-24 mx-2 my-2;
    img {
      @apply border-4 border-neutral-800 rounded-xl;
    }
  }
  .details {
    @apply w-full;
    h4 {
      @apply font-bold text-lg text-gray-200;
    }
    .status {
      @apply text-xs inline px-2 rounded-full text-white bg-gray-400;
      &.active {
        @apply bg-green-600;
      }
    }
  }
  .action {
    @apply flex;
    .icon {
      @apply mx-2 text-xl;
    }
  }
}
</style>