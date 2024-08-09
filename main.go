package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {
	engine := html.New("./site", ".html")
	engine.Reload(true)
	app := fiber.New(fiber.Config{
		Views: engine,
	})
	app.Static("/css", "./site/css", fiber.Static{})
	app.Static("/js", "./site/js", fiber.Static{})
	app.Static("/vendor", "./site/vendor", fiber.Static{})
	app.Static("/img", "./site/img", fiber.Static{})
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{})
	})
	panic(app.Listen(":8080"))
}
