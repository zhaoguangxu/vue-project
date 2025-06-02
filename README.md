# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## CI/CD 配置说明

本项目使用 GitHub Actions 进行持续集成和持续部署。配置文件位于 `.github/workflows/ci-cd.yml`。

### 触发条件

- 当代码推送到 `master` 分支时
- 当创建针对 `master` 分支的 Pull Request 时

### 工作流程步骤

1. **代码检出**：检出最新的代码
2. **环境配置**：设置 Node.js 20 环境
3. **依赖安装**：安装项目依赖
4. **代码检查**：
   - 运行 ESLint 进行代码规范检查
   - 运行 TypeScript 类型检查
5. **构建**：构建生产环境代码
6. **部署**：自动部署到 GitHub Pages（仅在 master 分支上触发）

### 使用说明

1. 确保项目已推送到 GitHub 仓库
2. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库的 Settings > Pages
   - 在 "Source" 部分选择 "GitHub Actions"
3. 确保 `vite.config.ts` 中配置了正确的基础路径（如果项目不是部署在根路径）

### 自动化保证

每次代码推送都会自动运行以下检查：

- 代码质量（通过 ESLint）
- 类型安全（通过 TypeScript 检查）
- 构建成功
- 自动部署到 GitHub Pages
