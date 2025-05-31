# Vue 3 组件开发规范

## 1. 文件命名规范

### 1.1 组件文件命名

- 使用 PascalCase 命名组件文件
- 组件名应该是多个单词的组合，避免与 HTML 元素冲突
- 示例：
  - `UserProfile.vue`
  - `TodoList.vue`
  - `BaseButton.vue`

### 1.2 目录结构

```
src/
  components/
    common/          # 通用组件
    business/        # 业务组件
    layout/          # 布局组件
    form/            # 表单相关组件
    table/           # 表格相关组件
```

## 2. 组件结构规范

### 2.1 组件基本结构

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
// 导入语句
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'

// 类型定义
interface Props {
  // 属性类型定义
}

// Props 定义
const props = defineProps<Props>()

// Emits 定义
const emit = defineEmits<{
  (e: 'update', value: string): void
  (e: 'delete'): void
}>()

// 响应式数据
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法定义
const handleClick = () => {
  // 方法实现
}

// 生命周期钩子
onMounted(() => {
  // 初始化逻辑
})
</script>

<style scoped>
/* 组件样式 */
</style>
```

### 2.2 组件属性规范

- 必须为所有 props 指定类型
- 必须为所有 props 提供默认值（除非是必需的）
- 使用 TypeScript 类型定义

```typescript
interface Props {
  title: string
  count?: number
  items: string[]
  status: 'active' | 'inactive'
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  items: () => [],
})
```

### 2.3 事件命名规范

- 使用 kebab-case 命名事件
- 事件名应该是动词或动词短语
- 示例：
  - `update:modelValue`
  - `item-click`
  - `form-submit`

## 3. 组件设计原则

### 3.1 单一职责

- 每个组件应该只负责一个功能
- 避免组件过于复杂，必要时拆分为多个子组件

### 3.2 可复用性

- 提取通用逻辑到可复用组件
- 使用组合式函数（Composables）抽取可复用的逻辑
- 示例：

```typescript
// composables/useCounter.ts
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const increment = () => count.value++
  const decrement = () => count.value--
  return {
    count,
    increment,
    decrement,
  }
}
```

### 3.3 组件通信

- 优先使用 props 和 emits 进行父子组件通信
- 复杂状态管理使用 Pinia
- 避免过度使用 provide/inject

## 4. 样式规范

### 4.1 作用域

- 使用 `scoped` 属性限制样式作用域
- 使用 CSS 变量实现主题定制

```vue
<style scoped>
.component {
  --primary-color: #42b983;
  color: var(--primary-color);
}
</style>
```

### 4.2 命名规范

- 使用 BEM 命名规范
- 示例：

```css
.block__element--modifier {
  /* 样式定义 */
}
```

## 5. 性能优化

### 5.1 组件优化

- 合理使用 `v-show` 和 `v-if`
- 使用 `v-memo` 缓存模板
- 避免不必要的组件渲染

### 5.2 列表渲染优化

- 始终使用 `key` 属性
- 使用虚拟滚动处理大量数据
- 避免在 `v-for` 中使用 `v-if`

## 6. 测试规范

### 6.1 单元测试

- 为每个组件编写单元测试
- 测试文件与组件文件同名，添加 `.spec.ts` 后缀
- 示例：

```typescript
// UserProfile.spec.ts
import { mount } from '@vue/test-utils'
import UserProfile from './UserProfile.vue'

describe('UserProfile', () => {
  it('renders properly', () => {
    const wrapper = mount(UserProfile, {
      props: {
        user: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    })
    expect(wrapper.text()).toContain('John Doe')
  })
})
```

## 7. 文档规范

### 7.1 组件文档

- 使用 JSDoc 注释说明组件的用途和用法
- 为所有 props 和 events 提供说明

```typescript
/**
 * 用户信息卡片组件
 * @component
 * @example
 * <UserCard
 *   :user="userData"
 *   @edit="handleEdit"
 * />
 */
```

### 7.2 代码注释

- 复杂逻辑必须添加注释
- 使用 TypeScript 类型注解
- 保持注释的及时更新

## 8. 版本控制

### 8.1 组件版本

- 遵循语义化版本规范
- 在组件文档中记录版本变更
- 重大变更需要提供迁移指南

## 9. 最佳实践

### 9.1 错误处理

- 使用 try-catch 处理异步操作
- 提供友好的错误提示
- 实现错误边界组件

### 9.2 可访问性

- 使用语义化 HTML 标签
- 添加适当的 ARIA 属性
- 确保键盘可访问性

### 9.3 国际化

- 使用 i18n 插件处理多语言
- 避免硬编码文本
- 支持 RTL 布局

## 10. 代码审查清单

- [ ] 组件命名符合规范
- [ ] Props 和 Emits 定义完整
- [ ] 类型定义准确
- [ ] 样式使用 scoped
- [ ] 包含必要的注释
- [ ] 通过所有测试
- [ ] 性能优化措施
- [ ] 可访问性支持
- [ ] 响应式设计
- [ ] 代码格式符合规范
