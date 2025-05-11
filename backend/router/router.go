package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jainsarthak216/task-manager/handlers"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// CORS config
	r.Use(cors.Default()) // Allows all origins, methods, headers

	// Define routes
	r.GET("/tasks", handlers.GetTasks)
	r.POST("/tasks", handlers.CreateTask)
	r.PUT("/tasks/:id", handlers.UpdateTask)
	r.DELETE("/tasks/:id", handlers.DeleteTask)

	return r
}
