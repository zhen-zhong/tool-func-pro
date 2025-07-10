#!/bin/bash

# 输出文件
OUTPUT_FILE="index.ts"

# 初始化内容
echo "// 自动生成的工具函数汇总文件" > $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# 遍历所有 .ts 文件，排除 index.ts 自身
for file in *.ts; do
  if [[ "$file" != "index.ts" ]]; then
    # 去掉扩展名
    name="${file%.ts}"
    echo "import $name from './$name';" >> $OUTPUT_FILE
  fi
done

echo "" >> $OUTPUT_FILE
echo "const toolFun = {" >> $OUTPUT_FILE

# 再次遍历所有 .ts 文件，添加到对象中
for file in *.ts; do
  if [[ "$file" != "index.ts" ]]; then
    name="${file%.ts}"
    echo "  $name," >> $OUTPUT_FILE
  fi
done

echo "};" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "export default toolFun;" >> $OUTPUT_FILE

echo "✅ 生成成功：$OUTPUT_FILE"
