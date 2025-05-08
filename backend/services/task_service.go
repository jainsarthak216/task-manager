package services

import (
	"errors"

	"github.com/jainsarthak216/task-manager/db"
	"github.com/jainsarthak216/task-manager/models"
)

func GetAllTasks() ([]models.Task, error) {
	var tasks []models.Task
	err := db.DB.Find(&tasks).Error
	return tasks, err
}

func CreateTask(task *models.Task) error {
	return db.DB.Create(task).Error
}

func UpdateTask(id uint, updated *models.Task) error {
	var task models.Task
	if err := db.DB.First(&task, id).Error; err != nil {
		return errors.New("task not found")
	}
	task.Title = updated.Title
	task.Description = updated.Description
	task.Status = updated.Status
	task.DueDate = updated.DueDate
	return db.DB.Save(&task).Error
}

func DeleteTask(id uint) error {
	return db.DB.Delete(&models.Task{}, id).Error
}
