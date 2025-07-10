#!/bin/bash

cd "$(dirname "$0")/.."

VERSION_TYPE=${1:-patch}
if [[ "$VERSION_TYPE" != "patch" && "$VERSION_TYPE" != "minor" && "$VERSION_TYPE" != "major" ]]; then
  echo "Usage: ./publish-npm.sh [patch|minor|major] (default: patch)"
  exit 1
fi

echo "🚀 开始自动发布流程（版本类型：$VERSION_TYPE）"

if ! command -v npx &> /dev/null; then
  echo "❌ 未找到 npx，请先安装 Node.js 和 npm"
  exit 1
fi

if ! npm whoami &>/dev/null; then
  echo "⚠️ 你尚未登录 NPM，请先运行：npm login"
  exit 1
fi

if [[ -n $(git status --porcelain) ]]; then
  echo "❌ Git 工作区不干净，请先提交或 stash 更改"
  exit 1
fi

echo "📦 编译 TypeScript..."
npx tsc || { echo "❌ 构建失败"; exit 1; }

echo "🔖 更新版本号为 $VERSION_TYPE..."
npm version $VERSION_TYPE || { echo "❌ 版本更新失败"; exit 1; }

CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📌 当前版本为：$CURRENT_VERSION"

echo "📤 发布到 NPM..."
npm publish --access public || { echo "❌ 发布失败"; exit 1; }

if [ -d .git ]; then
  echo "📁 推送到 Git 仓库..."
  git push
  git push --follow-tags
fi

echo "✅ 发布完成 🎉（版本：$CURRENT_VERSION）"
