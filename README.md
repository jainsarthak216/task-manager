# 📝 Task Manager Web Application

A full-stack Task Manager web application that allows users to create, view, update, and delete tasks. Built with:

- 🚀 **Backend**: Golang (Gin framework)
- 🗄️ **Database**: PostgreSQL (or SQLite for local testing)
- 🖥️ **Frontend**: React.js
- 🔐 **CORS-enabled**: Seamless communication between frontend and backend
- ✅ **Modular architecture**: Clean separation of concerns

---

## 🧱 Project Structure

```

task-manager/
├── backend/
│   ├── main.go
│   ├── go.mod
│   ├── go.sum
│   ├── db/
│   │   └── db.go
│   ├── models/
│   │   └── task.go
│   ├── router/
│   │   └── router.go
│   └── handlers/
│       └── task\_handler.go
├── frontend/
│   └── (React app files via Create React App)

````

---

## 🚀 Getting Started

### Prerequisites

- Go 1.18+
- Node.js & npm/yarn
- PostgreSQL (or SQLite for development)

---

## ⚙️ Backend Setup (Golang + Gin)

1. Navigate to backend directory:

```bash
cd backend
````

2. Initialize Go module (if not already done):

```bash
go mod init taskmanager
```

3. Install dependencies:

```bash
go get github.com/gin-gonic/gin
go get github.com/gin-contrib/cors
go get gorm.io/gorm
go get gorm.io/driver/postgres # or gorm.io/driver/sqlite
```

4. Configure your database in `db/db.go`

5. Run the backend server:

```bash
go run main.go
```

By default, it will run on: `http://localhost:8080`

---

## 🧪 Backend API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Get all tasks           |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task           |

---

## 🎨 Frontend Setup (React)

1. Navigate to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the React app:

```bash
npm start
# or
yarn start
```

By default, it will run on: `http://localhost:3000`

Make sure the backend is also running to avoid CORS/API errors.

---

## 💡 Features

* Add, edit, delete, and list tasks
* Each task includes title, description, status (`Pending`, `In-Progress`, `Completed`), and optional due date
* User-friendly UI built with React
* Validations and error handling on both frontend and backend
* Modular, scalable folder structure

---

## 🧠 Future Enhancements (Optional Ideas)

* ✅ **User authentication**: Allow users to register/login and manage their own tasks
* 🔍 **Task filtering**: Filter by status or due date
* 🔔 **Real-time updates**: Use WebSockets for task sync
* 📱 **Responsive UI**: Mobile-friendly design
* 🗂️ **Pagination or search**: For large task lists

---
