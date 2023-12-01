package main

import (
	"cdn-oaistatic/config"

	"github.com/gogf/gf/v2/frame/g"
)

func main() {
	s := g.Server()
	s.SetPort(config.PORT)
	s.Run()
}
