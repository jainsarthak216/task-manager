package router

import (
	"github.com/gin-gonic/gin"
	"github.com/jainsarthak216/task-manager/handlers"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/tasks", handlers.GetTasks)
	r.POST("/tasks", handlers.CreateTask)
	r.PUT("/tasks/:id", handlers.UpdateTask)
	r.DELETE("/tasks/:id", handlers.DeleteTask)

	return r
}
