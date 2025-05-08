package models

import "time"

type Task struct {
	ID          uint       `json:"id" gorm:"primaryKey"`
	Title       string     `json:"title"`
	Description string     `json:"description"`
	Status      string     `json:"status"` // "Pending", "In-Progress", "Completed"
	DueDate     *time.Time `json:"due_date"`
}
