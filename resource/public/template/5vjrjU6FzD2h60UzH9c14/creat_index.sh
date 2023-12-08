#!/bin/bash

# 定义索引文件的名称
index_file="index.txt"

# 如果文件不存在，则创建文件
if [ ! -f $index_file ]; then
    touch $index_file
fi

# 获取脚本自身的名称
script_name=$(basename $0)

# 清空索引文件
> $index_file

# 遍历当前目录下的所有文件，排除目录，脚本自身和索引文件
ls -p | grep -v / | grep -v $script_name | grep -v $index_file > $index_file