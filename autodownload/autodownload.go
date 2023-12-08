package autodownload

import (
	"regexp"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/text/gstr"
)

var (
	UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
	client    = g.Client().SetAgent(UserAgent).SetBrowserMode(true)
)

func AutoDownload(ctx g.Ctx, refreshCookie string) {
	g.Log().Info(ctx, "AutoDownload is running...")
	client.SetProxy("http://127.0.0.1:8006")
	client.SetCookie("__Secure-next-auth.session-token", refreshCookie)
	res, err := client.Get(ctx, "https://chat.openai.com")
	if err != nil {
		g.Log().Error(ctx, err)
		return
	}
	defer res.Close()
	// res.RawDump()
	if res.StatusCode != 200 {
		g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
		return
	}
	chathtml := res.ReadAllString()
	re := regexp.MustCompile(`"buildId":\s*"([^"]*)",`)
	match := re.FindStringSubmatch(chathtml)
	if len(match) < 2 {
		g.Log().Error(ctx, "buildId not found")
		return
	}
	buildId := match[1]
	chathtml = processHTML(chathtml)
	g.Log().Info(ctx, "buildId: "+buildId)
	if !gfile.Exists("./resource/public/template/" + buildId + "/chat.html") {
		gfile.PutContents("./resource/public/template/"+buildId+"/chat.html", chathtml)
	}

	// 下载 https://chat.openai.com/gpts/mine 为 ./resource/public/template/{{.buildId}}/mine.html
	if !gfile.Exists("./resource/public/template/" + buildId + "/mine.html") {

		res, err = client.Get(ctx, "https://chat.openai.com/gpts/mine")
		if err != nil {
			g.Log().Error(ctx, err)
			return
		}
		defer res.Close()
		// res.RawDump()
		if res.StatusCode != 200 {
			g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
			return
		}
		minehtml := res.ReadAllString()
		minehtml = processHTML(minehtml)
		gfile.PutContents("./resource/public/template/"+buildId+"/mine.html", minehtml)
	}

	// 下载 https://chat.openai.com/gpts/editor 为 ./resource/public/template/{{.buildId}}/editor.html
	if !gfile.Exists("./resource/public/template/" + buildId + "/editor.html") {

		res, err = client.Get(ctx, "https://chat.openai.com/gpts/editor")
		if err != nil {
			g.Log().Error(ctx, err)
			return
		}
		defer res.Close()
		// res.RawDump()
		if res.StatusCode != 200 {
			g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
			return
		}
		editorhtml := res.ReadAllString()
		editorhtml = processHTML(editorhtml)
		gfile.PutContents("./resource/public/template/"+buildId+"/editor.html", editorhtml)
	}
	// 下载 https://chat.openai.com/gpts/discovery 为 ./resource/public/template/{{.buildId}}/discovery.html
	if !gfile.Exists("./resource/public/template/" + buildId + "/discovery.html") {

		res, err = client.Get(ctx, "https://chat.openai.com/gpts/discovery")
		if err != nil {
			g.Log().Error(ctx, err)
			return
		}
		defer res.Close()
		// res.RawDump()
		if res.StatusCode != 200 {
			g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
			return
		}
		discoveryhtml := res.ReadAllString()
		discoveryhtml = processHTML(discoveryhtml)
		gfile.PutContents("./resource/public/template/"+buildId+"/discovery.html", discoveryhtml)
	}

	// 下载 https://chat.openai.com/g/g-2fkFE8rbu-dall-e 为 ./resource/public/template/{{.buildId}}/g.html
	if !gfile.Exists("./resource/public/template/" + buildId + "/g.html") {

		res, err = client.Get(ctx, "https://chat.openai.com/g/g-2fkFE8rbu-dall-e")
		if err != nil {
			g.Log().Error(ctx, err)
			return
		}
		defer res.Close()
		// res.RawDump()
		if res.StatusCode != 200 {
			g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
			return
		}
		ghtml := res.ReadAllString()
		ghtml = processHTML(ghtml)
		gfile.PutContents("./resource/public/template/"+buildId+"/g.html", ghtml)
	}

	// 下载 https://chat.openai.com/g/g-2fkFE8rbu-dall-e/c/a8b7af82-9c15-4d84-b964-a5dd93d960b2 为 ./resource/public/template/{{.buildId}}/gc.html
	if !gfile.Exists("./resource/public/template/" + buildId + "/gc.html") {

		res, err = client.Get(ctx, "https://chat.openai.com/g/g-2fkFE8rbu-dall-e/c/a8b7af82-9c15-4d84-b964-a5dd93d960b2")
		if err != nil {
			g.Log().Error(ctx, err)
			return
		}
		defer res.Close()
		// res.RawDump()
		if res.StatusCode != 200 {
			g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
			return
		}
		gchtml := res.ReadAllString()
		gchtml = processHTML(gchtml)
		gfile.PutContents("./resource/public/template/"+buildId+"/gc.html", gchtml)
	}

	// 下载 https://chat.openai.com/gpts/editor/g-0WDUbIHuf 为 ./resource/public/template/{{.buildId}}/slug.html
	if !gfile.Exists("./resource/public/template/" + buildId + "/slug.html") {

		res, err = client.Get(ctx, "https://chat.openai.com/gpts/editor/g-0WDUbIHuf")
		if err != nil {
			g.Log().Error(ctx, err)
			return
		}
		defer res.Close()
		// res.RawDump()
		if res.StatusCode != 200 {
			g.Log().Error(ctx, "StatusCode is not 200", res.StatusCode)
			return
		}
		slughtml := res.ReadAllString()
		slughtml = processHTML(slughtml)
		gfile.PutContents("./resource/public/template/"+buildId+"/slug.html", slughtml)
	}

}

func processHTML(html string) string {
	// 替换 <script id="__NEXT_DATA__" type="application/json">xxxx </script> 中的 xxxx 为 {{.props}}
	propsRe := regexp.MustCompile(`<script id="__NEXT_DATA__" type="application/json">([^<]*)</script>`)
	html = propsRe.ReplaceAllString(html, `<script id="__NEXT_DATA__" type="application/json">{{.props}}</script>`)
	// 替换所有 https://cdn.oaistatic.com 为 {{.assetPrefix}}
	assetPrefixRe := regexp.MustCompile(`https://cdn.oaistatic.com`)
	html = assetPrefixRe.ReplaceAllString(html, "{{.assetPrefix}}")
	// 将cloudflare人机验证的js替换为空白 <script>(function(){var js = xxxx </script> 替换为 <script></script>
	cfRe := regexp.MustCompile(`<script>\(function\(\)\{var js = .*?</script>`)
	html = cfRe.ReplaceAllString(html, `<script></script>`)
	// 在 <head> 后插入 {{.envScript}} 来设置全局js变量
	html = gstr.Replace(html, "<head>", "<head>{{.envScript}}", 1)

	return html
}
