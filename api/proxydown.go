package api

import (
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gfile"
)

func ProxyDown(r *ghttp.Request) {
	ctx := r.Context()
	r.Header.Set("Host", "cdn.oaistatic.com")
	r.Header.Set("Origin", "https://cdn.oaistatic.com")
	r.Header.Set("Referer", "https://cdn.oaistatic.com/")
	r.Header.Set("Sec-Fetch-Dest", "empty")
	r.Header.Set("Sec-Fetch-Mode", "cors")
	r.Header.Set("Sec-Fetch-Site", "same-origin")
	r.Header.Del("X-Forwarded-Host")
	r.Header.Del("X-Forwarded-Proto")
	r.Header.Del("X-Forwarded-For")
	r.Header.Del("X-Forwarded-Port")
	r.Header.Del("X-Forwarded-Server")
	r.Header.Del("X-Real-Ip")
	r.Header.Del("X-Request-Start")
	r.Header.Del("X-Request-Id")
	r.Header.Del("Cf-Ray")
	r.Header.Del("Cf-Connecting-Ip")
	r.Header.Del("Cf-Request-Id")
	r.Header.Del("Cf-Visitor")
	r.Header.Del("Cf-Ipcountry")
	r.Header.Del("Cf-Device-Type")
	r.Header.Del("Cf-Ew-Via")
	r.Header.Del("Cdn-Loop")
	r.Header.Del("Authkey")
	r.Header.Del("Cookie")
	r.Header.Del("Traceparent")
	r.Header.Del("Accept-Encoding")
	UpStream := "https://cdn.oaistatic.com"
	u, _ := url.Parse(UpStream)
	proxy := httputil.NewSingleHostReverseProxy(u)
	// proxy.Transport = &http.Transport{
	// 	// Proxy: http.ProxyURL(config.PROXY),
	// 	TLSClientConfig: &tls.Config{
	// 		InsecureSkipVerify: true,
	// 	},
	// }

	proxy.ModifyResponse = func(resp *http.Response) error {
		if resp.StatusCode != 200 {
			g.Log().Info(ctx, r.RequestURI, "status code", resp.StatusCode)
			return nil
		}
		// 读取body
		staticbody, err := io.ReadAll(resp.Body)
		if err != nil {
			return err
		}
		// g.Dump(string(body))
		// 将原始内容重新写入body
		r.Response.Status = resp.StatusCode
		r.Response.Write(staticbody)
		filepath := "./resource/public" + r.RequestURI
		// url解码 filepath
		filepath, _ = url.QueryUnescape(filepath)
		extName := gfile.ExtName(filepath)
		g.Log().Info(ctx, filepath, extName)
		if extName == "js" || extName == "css" || extName == "json" {
			if !gfile.Exists(filepath) && resp.StatusCode == 200 {
				err := gfile.PutContents(filepath, string(staticbody))
				if err != nil {
					g.Log().Error(ctx, err)
				}
				g.Log().Info(ctx, "save file", filepath, extName)
			}
		}
		if extName == "png" || extName == "jpg" || extName == "jpeg" || extName == "gif" {
			if !gfile.Exists(filepath) && resp.StatusCode == 200 {
				err := gfile.PutBytes(filepath, staticbody)
				if err != nil {
					g.Log().Error(ctx, err)
				}
				g.Log().Info(ctx, "save file", filepath, extName)
			}
		}
		// woff2
		if extName == "woff2" {
			if !gfile.Exists(filepath) && resp.StatusCode == 200 {
				err := gfile.PutBytes(filepath, staticbody)
				if err != nil {
					g.Log().Error(ctx, err)
				}
				g.Log().Info(ctx, "save file", filepath, extName)
			}
		}

		g.Log().Info(ctx, filepath, extName)
		return nil
	}
	proxy.Director = func(req *http.Request) {
		req.Header = r.Header
		req.URL.Scheme = "https"
		req.URL.Host = "cdn.oaistatic.com"
		req.Host = "cdn.oaistatic.com"
		// CookiesMap.Iterator(func(k interface{}, v interface{}) bool {
		// 	req.AddCookie(&http.Cookie{
		// 		Name:  gconv.String(k),
		// 		Value: gconv.String(v),
		// 	})
		// 	return true
		// })
	}
	r.Host = "cdn.oaistatic.com"

	proxy.ServeHTTP(r.Response.RawWriter(), r.Request)
}
