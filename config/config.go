package config

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

var (
	PORT  = 8080
	PROXY = ""
)

func init() {
	ctx := gctx.GetInitCtx()
	port := g.Cfg().MustGetWithEnv(ctx, "PORT").Int()
	if port > 0 {
		PORT = port
	}
	g.Log().Info(ctx, "PORT:", PORT)
	proxy := g.Cfg().MustGetWithEnv(ctx, "PROXY").String()
	if proxy != "" {
		PROXY = proxy
	}
	g.Log().Info(ctx, "PROXY:", PROXY)

}
