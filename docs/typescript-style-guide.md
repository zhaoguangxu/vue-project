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

## 13. 泛型规范

### 13.1 泛型命名

```typescript
// 推荐使用单个大写字母作为泛型参数名
function identity<T>(arg: T): T {
  return arg
}

// 多个泛型参数时使用描述性名称
function map<TInput, TOutput>(items: TInput[], mapper: (item: TInput) => TOutput): TOutput[] {
  return items.map(mapper)
}
```

### 13.2 泛型约束

```typescript
// 使用 extends 约束泛型类型
interface HasLength {
  length: number
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length
}
```

## 14. 类型守卫规范

### 14.1 类型守卫函数

```typescript
// 使用 is 关键字定义类型守卫
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value && 'name' in value
}

// 使用类型守卫
function processValue(value: unknown) {
  if (isUser(value)) {
    // value 在这里被推断为 User 类型
    console.log(value.name)
  }
}
```

## 15. 装饰器规范

### 15.1 装饰器使用

```typescript
// 类装饰器
function log(target: any) {
  console.log('类被装饰:', target.name)
}

// 方法装饰器
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

@log
class Example {
  @enumerable(false)
  method() {}
}
```

## 16. 异步编程规范

### 16.1 Promise 使用

```typescript
// 推荐使用 async/await
async function fetchUser(id: number): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`)
    if (!response.ok) {
      throw new Error('用户获取失败')
    }
    return await response.json()
  } catch (error) {
    console.error('获取用户时发生错误:', error)
    throw error
  }
}

// 避免使用 .then() 链式调用
// 不推荐
fetchUser(1)
  .then((user) => processUser(user))
  .catch((error) => handleError(error))
```

## 17. 类型声明文件规范

### 17.1 声明文件编写

```typescript
// 模块声明
declare module 'my-module' {
  export interface Config {
    apiKey: string
    timeout?: number
  }

  export function initialize(config: Config): void
}

// 全局声明
declare global {
  interface Window {
    myCustomProperty: string
  }
}
```

## 18. 测试规范

### 18.1 单元测试

```typescript
import { describe, it, expect } from 'vitest'

describe('UserService', () => {
  it('should create user with valid data', () => {
    const user = new User(1, 'John', 'john@example.com')
    expect(user.name).toBe('John')
    expect(user.email).toBe('john@example.com')
  })

  it('should throw error with invalid email', () => {
    expect(() => {
      new User(1, 'John', 'invalid-email')
    }).toThrow('Invalid email format')
  })
})
```

## 19. 性能优化补充

### 19.1 类型优化

```typescript
// 使用 const 断言
const colors = ['red', 'blue', 'green'] as const
type Color = (typeof colors)[number]

// 使用 readonly 数组
const readonlyColors: readonly string[] = ['red', 'blue', 'green']

// 使用 Record 类型
type UserRoles = Record<string, string[]>
```

### 19.2 内存优化

```typescript
// 使用 WeakMap 存储私有数据
const privateData = new WeakMap<object, any>()

class PrivateData {
  constructor() {
    privateData.set(this, {
      secret: 'value',
    })
  }
}
```

## 20. 安全性规范

### 20.1 类型安全

```typescript
// 使用 unknown 代替 any
function processData(data: unknown) {
  if (typeof data === 'string') {
    // 安全地处理字符串
  }
}

// 使用类型断言函数
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('值必须是字符串')
  }
}
```

### 20.2 输入验证

```typescript
// 使用 zod 进行运行时类型验证
import { z } from 'zod'

const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.string().email(),
})

type User = z.infer<typeof UserSchema>

function validateUser(data: unknown): User {
  return UserSchema.parse(data)
}
```

## 21. 代码审查清单补充

- [ ] 泛型使用是否恰当
- [ ] 类型守卫是否完善
- [ ] 异步代码是否正确处理错误
- [ ] 是否避免使用 any 类型
- [ ] 是否使用类型断言函数
- [ ] 是否进行输入验证
- [ ] 是否考虑性能影响
- [ ] 是否遵循 SOLID 原则
- [ ] 是否编写单元测试
- [ ] 是否使用类型声明文件
