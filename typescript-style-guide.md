# TypeScript 编码规范

## 1. 命名规范

### 1.1 文件命名

- 使用 PascalCase 命名组件文件：`UserProfile.tsx`
- 使用 camelCase 命名工具类文件：`utils.ts`
- 使用 kebab-case 命名样式文件：`user-profile.css`

### 1.2 变量命名

- 使用 camelCase 命名变量和函数
- 使用 PascalCase 命名类和接口
- 使用全大写下划线命名常量：`MAX_COUNT`
- 私有成员变量以下划线开头：`_privateVar`

### 1.3 接口命名

- 接口名称使用 PascalCase
- 接口名称不需要加 `I` 前缀
- 例如：`UserProfile` 而不是 `IUserProfile`

## 2. 类型定义

### 2.1 基本类型

```typescript
// 推荐
const name: string = 'John'
const age: number = 30
const isActive: boolean = true

// 不推荐
const name = 'John' // 除非类型推断很明显
```

### 2.2 接口定义

```typescript
interface User {
  id: number
  name: string
  email?: string // 可选属性
  readonly createdAt: Date // 只读属性
}
```

### 2.3 类型别名

```typescript
type Point = {
  x: number
  y: number
}

type ID = string | number
```

## 3. 函数规范

### 3.1 函数声明

```typescript
// 推荐
function calculateTotal(price: number, quantity: number): number {
  return price * quantity
}

// 箭头函数
const calculateTotal = (price: number, quantity: number): number => {
  return price * quantity
}
```

### 3.2 参数类型

- 必须为所有参数指定类型
- 可选参数放在必需参数之后
- 使用解构时指定类型

```typescript
function processUser({ name, age }: { name: string; age: number }): void {
  // ...
}
```

## 4. 类规范

### 4.1 类定义

```typescript
class User {
  private readonly id: number
  public name: string
  protected email: string

  constructor(id: number, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }

  public getInfo(): string {
    return `${this.name} (${this.email})`
  }
}
```

## 5. 模块规范

### 5.1 导入导出

```typescript
// 推荐
import { User } from './types'
import type { UserType } from './types'

// 不推荐
import * as types from './types'
```

### 5.2 默认导出

```typescript
// 推荐
export default class UserService {
  // ...
}

// 不推荐
export default {
  // ...
}
```

## 6. 注释规范

### 6.1 文档注释

```typescript
/**
 * 计算用户总积分
 * @param userId - 用户ID
 * @param period - 统计周期（月）
 * @returns 用户总积分
 */
function calculateUserPoints(userId: number, period: number): number {
  // ...
}
```

## 7. 错误处理

### 7.1 异常处理

```typescript
try {
  await processData()
} catch (error) {
  if (error instanceof CustomError) {
    // 处理特定错误
  } else {
    // 处理未知错误
    console.error('未知错误:', error)
  }
}
```

## 8. 最佳实践

### 8.1 使用类型断言

```typescript
// 推荐
const element = document.getElementById('root') as HTMLElement

// 不推荐
const element = <HTMLElement>document.getElementById('root')
```

### 8.2 使用类型保护

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}
```

### 8.3 使用枚举

```typescript
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}
```

## 9. 代码组织

### 9.1 文件结构

```
src/
  ├── components/     # 组件
  ├── types/         # 类型定义
  ├── utils/         # 工具函数
  ├── services/      # 服务
  ├── hooks/         # 自定义钩子
  └── constants/     # 常量
```

### 9.2 导入顺序

1. 第三方库导入
2. 类型导入
3. 相对路径导入
4. 样式导入

## 10. 性能优化

### 10.1 类型优化

- 使用 `readonly` 防止意外修改
- 使用 `const` 断言
- 避免使用 `any` 类型

### 10.2 代码优化

- 使用 `async/await` 而不是回调
- 使用解构赋值
- 使用可选链操作符 `?.`
- 使用空值合并操作符 `??`

## 11. 工具配置

### 11.1 tsconfig.json 推荐配置

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## 12. 代码审查清单

- [ ] 所有变量和函数都有明确的类型
- [ ] 没有使用 `any` 类型
- [ ] 代码格式符合规范
- [ ] 注释完整且有意义
- [ ] 错误处理完善
- [ ] 代码可测试
- [ ] 性能优化考虑
- [ ] 安全性考虑
