# Git 提交规范指南

## 项目配置说明

本项目使用以下工具来强制执行 Git 提交规范：

1. `@commitlint/cli`：用于检查提交信息
2. `@commitlint/config-conventional`：提供常规的提交规范配置
3. `husky`：用于设置 Git hooks

## 提交信息格式

每个提交信息必须遵循以下格式：

```
<类型>: <主题>

[可选的详细说明]

[可选的破坏性变更说明]
```

## 提交类型说明

| 类型     | 说明                                            | 示例                            |
| -------- | ----------------------------------------------- | ------------------------------- |
| feat     | 新功能                                          | feat: 添加用户登录功能          |
| fix      | 修复bug                                         | fix: 修复登录按钮点击无响应问题 |
| docs     | 文档更新                                        | docs: 更新API文档               |
| style    | 代码格式（不影响代码运行的变动）                | style: 格式化代码缩进           |
| refactor | 重构（既不是新增功能，也不是修改bug的代码变动） | refactor: 重构用户认证逻辑      |
| perf     | 性能优化                                        | perf: 优化列表渲染性能          |
| test     | 增加测试                                        | test: 添加用户登录测试用例      |
| chore    | 构建过程或辅助工具的变动                        | chore: 更新构建脚本             |
| revert   | 回滚                                            | revert: 回滚到上一个稳定版本    |
| ci       | CI配置相关                                      | ci: 更新GitHub Actions配置      |

## 提交规范要求

1. 类型必须小写
2. 类型不能为空
3. 主题不能为空
4. 主题必须使用现在时态
5. 主题首字母不要大写
6. 主题结尾不要加句号
7. 主题长度不超过72个字符

## 提交示例

### 新功能

```
feat: 添加用户登录功能

- 实现用户名密码登录
- 添加记住密码功能
- 集成JWT认证

Closes #123
```

### 修复bug

```
fix: 修复登录页面样式错乱问题

- 修复移动端适配问题
- 优化按钮样式

Fixes #456
```

### 文档更新

```
docs: 更新README安装说明

- 添加环境要求说明
- 更新安装步骤
```

### 代码重构

```
refactor: 重构用户认证模块

- 将认证逻辑抽离到独立服务
- 优化代码结构

BREAKING CHANGE: 认证接口返回格式变更
```

## 工具配置说明

### 1. commitlint 配置

项目根目录下的 `commitlint.config.js` 文件定义了提交规范：

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'ci', // CI配置相关
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
}
```

### 2. Git 提交模板

项目根目录下的 `.gitmessage` 文件提供了提交信息模板：

```
# <类型>: <主题>

# 类型说明：
# feat:     新功能
# fix:      修复bug
# docs:     文档更新
# style:    代码格式（不影响代码运行的变动）
# refactor: 重构（既不是新增功能，也不是修改bug的代码变动）
# perf:     性能优化
# test:     增加测试
# chore:    构建过程或辅助工具的变动
# revert:   回滚
# ci:       CI配置相关

# 主题说明：
# 1. 使用现在时态
# 2. 首字母不要大写
# 3. 结尾不要加句号

# 详细说明（可选）：
# 1. 列出改动的原因
# 2. 列出相关的issue编号

# 破坏性变更（可选）：
# 列出破坏性变更的详细说明
```

### 3. Husky 配置

在 `package.json` 中添加了 husky 的安装脚本：

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## 常见问题

### 1. 如何修改最后一次提交信息？

```bash
git commit --amend
```

### 2. 如何修改历史提交信息？

```bash
# 修改最近n次提交
git rebase -i HEAD~n
```

### 3. 提交被拒绝怎么办？

如果提交信息不符合规范，commitlint 会阻止提交并显示错误信息。请根据错误信息修改提交信息，确保符合规范要求。

## 最佳实践

1. 经常提交代码，每个提交应该是独立且完整的
2. 提交前先拉取最新代码
3. 提交前运行测试确保代码质量
4. 写清晰的提交信息，方便后续维护
5. 使用 `git commit` 命令时会自动打开提交模板，按照模板格式填写提交信息
