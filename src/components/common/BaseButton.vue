<!--
  @component BaseButton
  @description 基础按钮组件，支持多种类型、尺寸和状态
  @example
  <BaseButton
    type="primary"
    size="medium"
    :loading="false"
    @click="handleClick"
  >
    点击按钮
  </BaseButton>
-->
<template>
  <button
    :class="[
      'base-button',
      `base-button--${type}`,
      `base-button--${size}`,
      { 'base-button--loading': loading },
      { 'base-button--disabled': disabled }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="base-button__loading-icon">
      <i class="icon-loading"></i>
    </span>
    <span class="base-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 按钮类型 */
  type?: 'primary' | 'secondary' | 'danger' | 'text'
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large'
  /** 是否加载中 */
  loading?: boolean
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  loading: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-button {
  --primary-color: #42b983;
  --secondary-color: #666;
  --danger-color: #ff4d4f;
  --text-color: #333;
  --border-radius: 4px;
  --transition-duration: 0.3s;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  transition: all var(--transition-duration);
  user-select: none;
}

/* 类型样式 */
.base-button--primary {
  color: #fff;
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.base-button--primary:hover {
  background-color: color-mix(in srgb, var(--primary-color) 90%, black);
  border-color: color-mix(in srgb, var(--primary-color) 90%, black);
}

.base-button--secondary {
  color: var(--secondary-color);
  background-color: #fff;
  border-color: #d9d9d9;
}

.base-button--secondary:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.base-button--danger {
  color: #fff;
  background-color: var(--danger-color);
  border-color: var(--danger-color);
}

.base-button--danger:hover {
  background-color: color-mix(in srgb, var(--danger-color) 90%, black);
  border-color: color-mix(in srgb, var(--danger-color) 90%, black);
}

.base-button--text {
  color: var(--text-color);
  background-color: transparent;
  border-color: transparent;
  padding: 0;
}

.base-button--text:hover {
  color: var(--primary-color);
}

/* 尺寸样式 */
.base-button--small {
  height: 24px;
  font-size: 12px;
}

.base-button--medium {
  height: 32px;
  font-size: 14px;
}

.base-button--large {
  height: 40px;
  font-size: 16px;
}

/* 状态样式 */
.base-button--loading {
  cursor: wait;
  opacity: 0.8;
}

.base-button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* 加载图标 */
.base-button__loading-icon {
  margin-right: 8px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 内容区域 */
.base-button__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
