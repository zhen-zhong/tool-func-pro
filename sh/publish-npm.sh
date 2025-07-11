#!/bin/bash
# 执行方法 ./publish-npm.sh patch

# 移动到项目根目录
cd "$(dirname "$0")/.."

# 确定版本更新类型 (patch, minor, major)，默认为 patch
VERSION_TYPE=${1:-patch}
if [[ "$VERSION_TYPE" != "patch" && "$VERSION_TYPE" != "minor" && "$VERSION_TYPE" != "major" ]]; then
  echo "Usage: ./publish-npm.sh [patch|minor|major] (default: patch)"
  exit 1
fi

echo "🚀 开始自动发布流程（版本类型：$VERSION_TYPE）"

# --- 前置检查 ---
if ! npm whoami &>/dev/null; then
  echo "⚠️ 你尚未登录 NPM，请先运行：npm login"
  exit 1
fi

if [[ -n $(git status --porcelain) ]]; then
  echo "❌ Git 工作区不干净，请先提交或 stash 更改"
  exit 1
fi
echo "✅ 前置检查通过"

# --- 核心流程：构建 -> 版本 -> 发布 -> 推送 ---

# 1. 构建项目
echo "📦 正在执行构建（npm run build）..."
npm run build || { echo "❌ 构建失败，请检查 Rollup 配置"; exit 1; }
echo "✅ 构建成功"

# 2. 更新版本号并直接捕获新版本号 <--- 关键修改在这里
echo "🔖 正在更新版本号 ($VERSION_TYPE)..."
NEW_VERSION_WITH_V=$(npm version $VERSION_TYPE -m "release: v%s") || { echo "❌ 版本更新失败"; exit 1; }
# 使用 shell 的参数扩展，去掉前缀 'v'，得到纯净的版本号
CURRENT_VERSION=${NEW_VERSION_WITH_V#v}
echo "📌 当前版本为：$CURRENT_VERSION"

# 3. 发布到 NPM
echo "📤 正在发布到 NPM..."
npm publish --access public || { echo "❌ 发布失败"; exit 1; }

# 4. 推送到 Git 仓库
if [ -d .git ]; then
  echo "📁 正在推送到 Git 仓库..."
  git push
  git push --follow-tags # 推送 commit 的同时也推送它关联的 tag
fi

echo "✅ 发布完成 🎉（版本：$CURRENT_VERSION）"