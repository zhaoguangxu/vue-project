<template>
  <button
    class="federation-button"
    :class="[type, size]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'FederationButton'
})

defineProps<{
  type?: 'primary' | 'secondary' | 'success' | 'danger'
  size?: 'small' | 'medium' | 'large'
}>()

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style scoped>
.federation-button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.primary {
  background-color: #4CAF50;
  color: white;
}

.secondary {
  background-color: #9E9E9E;
  color: white;
}

.success {
  background-color: #2196F3;
  color: white;
}

.danger {
  background-color: #f44336;
  color: white;
}

.small {
  padding: 4px 8px;
  font-size: 12px;
}

.medium {
  padding: 8px 16px;
  font-size: 14px;
}

.large {
  padding: 12px 24px;
  font-size: 16px;
}
</style>
