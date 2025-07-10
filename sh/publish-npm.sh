#!/bin/bash

export LANG=en_US.UTF-8

usage() {
  echo "Usage: ./publish-npm.sh [patch|minor|major|<version>] (default: patch)"
  exit 1
}

VERSION_TYPE=${1:-patch}

# 支持 patch|minor|major 或 版本号格式如 1.0.5
if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major|[0-9]+\.[0-9]+\.[0-9]+)$ ]]; then
  usage
fi

echo "🚀 开始自动发布流程（版本类型：$VERSION_TYPE）"

# 确保 npx 存在（调用本地 tsc）
if ! command -v npx &> /dev/null; then
  echo "❌ 未找到 npx，请先安装 Node.js 和 npm"
  exit 1
fi

# 确保登录了 NPM
if ! npm whoami &> /dev/null; then
  echo "⚠️ 你尚未登录 NPM，请先运行：npm login"
  exit 1
fi

echo "📦 编译 TypeScript..."
npx tsc || { echo "❌ 构建失败"; exit 1; }

echo "🔖 更新版本号为 $VERSION_TYPE..."
npm version "$VERSION_TYPE" || { echo "❌ 版本更新失败"; exit 1; }

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
