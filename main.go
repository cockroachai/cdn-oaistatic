package main

import (
	"cdn-oaistatic/api"
	"cdn-oaistatic/autodownload"
	"cdn-oaistatic/config"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/os/gfile"
)

func main() {
	ctx := gctx.New()
	// 检查是否存在 ./temp/session.json 文件
	if gfile.Exists("./temp/session.json") {
		// 读取 ./temp/session.json 文件内容
		jsonStr := gfile.GetContents("./temp/session.json")
		sessionJson := gjson.New(jsonStr)
		refreshCookie := sessionJson.Get("refreshCookie").String()
		// 调用 autodownload.AutoDownload 函数
		if refreshCookie != "" {
			autodownload.AutoDownload(ctx, refreshCookie)
		}
	}

	s := g.Server()
	s.SetPort(config.PORT)
	s.SetServerRoot("./resource/public")
	s.BindHandler("/*", api.ProxyDown)
	s.Run()
}
