package main

import (
	"github.com/jainsarthak216/task-manager/db"
	"github.com/jainsarthak216/task-manager/router"
)

func main() {
	db.Init() // initialize database connection
	r := router.SetupRouter()
	r.Run(":8080")
}
