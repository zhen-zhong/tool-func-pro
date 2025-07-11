#!/bin/bash

# 设置目录变量
TOOL_DIR="../tools"
OUTPUT_FILE="../index.ts"
EXCLUDE_FILE="index.ts"

# 初始化输出文件
echo "// ⚙️ 自动生成的工具函数汇总文件，请勿手动修改" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# 1. 生成 import 语句
for file in "$TOOL_DIR"/*.ts; do
  filename=$(basename -- "$file")
  if [[ "$filename" != "$EXCLUDE_FILE" ]]; then
    moduleName="${filename%.ts}"
    echo "import $moduleName from './tools/$moduleName';" >> "$OUTPUT_FILE"
  fi
done

echo "" >> "$OUTPUT_FILE"

# 2. 生成 export {...} 命名导出
echo "export {" >> "$OUTPUT_FILE"
for file in "$TOOL_DIR"/*.ts; do
  filename=$(basename -- "$file")
  if [[ "$filename" != "$EXCLUDE_FILE" ]]; then
    moduleName="${filename%.ts}"
    echo "  $moduleName," >> "$OUTPUT_FILE"
  fi
done
echo "};" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# 3. 生成默认导出的对象
echo "const toolFun = {" >> "$OUTPUT_FILE"
for file in "$TOOL_DIR"/*.ts; do
  filename=$(basename -- "$file")
  if [[ "$filename" != "$EXCLUDE_FILE" ]]; then
    moduleName="${filename%.ts}"
    echo -e "  $moduleName," >> "$OUTPUT_FILE"
  fi
done
echo "};" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "export default toolFun;" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "✅ 工具函数索引已生成：$OUTPUT_FILE"
