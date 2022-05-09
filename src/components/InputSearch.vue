<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-search">
    <input
      type="text"
      placeholder="Buscar"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button>
      <Icon icon="carbon:search" />
    </button>
  </div>
</template>

<style lang="scss">
.input-search {
  @apply flex rounded-md text-zinc-400 bg-neutral-900;
  input {
    @apply w-full px-2 py-1 bg-transparent rounded-md;
  }
  button {
    @apply border-none p-2 rounded-md;
  }
}
</style>
