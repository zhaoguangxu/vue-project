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
   - 在 "Source" 部分选择 **gh-pages 分支**（推荐，见下方说明）
3. 确保 `vite.config.ts` 中配置了正确的基础路径（如果项目不是部署在根路径）

### 自动化保证

每次代码推送都会自动运行以下检查：

- 代码质量（通过 ESLint）
- 类型安全（通过 TypeScript 检查）
- 构建成功
- 自动部署到 GitHub Pages

---

### CI/CD 与 GitHub Pages 的关系说明

1. **GitHub Actions 与 GitHub Pages 的关系**

   - GitHub Actions 用于自动化构建、测试、打包、部署。
   - GitHub Pages 用于托管静态网站。

2. **peaceiris/actions-gh-pages 的工作原理**

   - CI/CD 工作流（GitHub Actions）会自动构建项目，并把打包后的静态文件推送到 `gh-pages` 分支。
   - 这一步完成后，静态资源就已经在 `gh-pages` 分支上了。

3. **GitHub Pages 的 Source 设置**

   - GitHub Pages 必须"知道"从哪里读取静态资源来对外发布。
   - 常见方式：
     - Source 选 `gh-pages` 分支：最常见、最兼容，GitHub Pages 会自动发布 `gh-pages` 分支的内容。
     - Source 选 GitHub Actions：适用于官方的 `deploy-pages` Action（而不是 peaceiris/actions-gh-pages）。

4. **为什么本项目要选 gh-pages 分支？**

   - 本项目 workflow 用的是 peaceiris/actions-gh-pages，它的作用就是把构建产物推送到 `gh-pages` 分支。
   - 这种方式下，GitHub Pages 必须设置 Source 为 `gh-pages` 分支，否则不会发布分支内容，页面就会 404。

5. **如果想用 Source 选 GitHub Actions？**
   - 需要用 GitHub 官方的 `actions/deploy-pages` Action，并且 workflow 结构要做相应调整。
   - 这种方式目前主要用于更高级的自定义场景，且官方文档和生态还在完善中。

**结论：**

- 当前配置下，Source 必须选 `gh-pages` 分支。
- 这样才能让 peaceiris/actions-gh-pages 的产物被 GitHub Pages 正确发布。
- 这并不影响您用 GitHub Actions 做持续集成和持续部署，Actions 依然全自动完成构建和推送，您无需手动操作。
