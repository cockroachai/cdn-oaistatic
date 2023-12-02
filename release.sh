#!/bin/bash
set -e
docker build -t xyhelper/cdn-oaistatic:latest .
docker push xyhelper/cdn-oaistatic:latest
# 生成当前日期时间标签
datetime=$(date +%Y%m%d%H%M%S)
docker tag xyhelper/cdn-oaistatic:latest xyhelper/cdn-oaistatic:$datetime
docker push xyhelper/cdn-oaistatic:$datetime

