package db

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/jainsarthak216/task-manager/models"
)

var DB *gorm.DB

func Init() {
	dsn := "host=localhost user=taskuser password=taskpass dbname=taskdb port=5432 sslmode=disable"
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	err = DB.AutoMigrate(&models.Task{})
	if err != nil {
		log.Fatal("Failed to run migrations:", err)
	}
	fmt.Println("Database connected")
}
