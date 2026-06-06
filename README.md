# TaskMaster - Task Management App

A modern, full-stack **Task Management Application** built using the **MERN** stack, designed to help users organize tasks, manage priorities, track progress, and improve productivity through a clean and intuitive interface.

The application supports secure authentication, real-time task operations, and a responsive UI optimized for both desktop and mobile users.

Live Demo: https://task-management-frontend-1a7v.onrender.com/
---

## 🚀 Overview

Managing tasks efficiently is essential for productivity, yet many tools are either too complex or lack essential features.  
**TaskMaster** provides a **simple, fast, and user-centric solution** that focuses on clarity, usability, and performance.

The app enables users to:
- Create and manage tasks effortlessly
- Track task status (Pending / Completed)
- Assign priorities and due dates
- Maintain a secure account with authentication
- Access tasks from any device

---

## 🧠 Core Features

### 🔐 Authentication & Security
- Secure **JWT-based authentication**
- Login & Signup with encrypted passwords
- Token-based session handling
- Automatic logout on token expiration
- Protected routes for authenticated users only

### 📝 Task Management
- Create, edit, and delete tasks
- Mark tasks as **Completed / Pending**
- Prevents duplicate or invalid task states
- Priority-based task organization (Low / Medium / High)

### 📊 Task Tracking & Views
- Dashboard overview displaying all user tasks at a glance
- Dedicated task views for better organization:
  - **All Tasks** - view every task in one place
  - **Pending Tasks** - focus on tasks that are yet to be completed
  - **Completed Tasks** - review finished tasks
- Real-time UI updates after task creation, update, or deletion
- Instant state synchronization without page reloads

### ⏰ Dates & Scheduling
- Due date assignment for tasks
- Created date tracking
- Visual indicators for:
    - Today’s tasks
    - Overdue tasks

### 🎨 Modern UI / UX
- Fully responsive design (desktop + mobile)
- Dark-themed, glassmorphic interface
- Smooth animations & transitions
- Custom color system with reusable theme variables
- Clean typography using Fredoka and Montserrat

### ⚙️ Optimized User Experience
- Auto-redirect after login/logout
- Inline validation and feedback
- Toast notifications for success & errors
- Disabled actions for completed tasks
- Minimalistic and distraction-free layout

---

## 🏗️ System Architecture

The Task Manager application follows a clean **client–server architecture** with a fully decoupled frontend and backend, ensuring scalability, maintainability, and performance.

---

### ⚙️ Technologies Used

#### 🖥️ Frontend
- **React (Vite)** – Fast, modern frontend framework with optimized build tooling
- **Tailwind CSS v4** – Utility-first CSS framework for responsive and consistent UI
- **React Router DOM** – Client-side routing for seamless navigation
- **Axios** – Promise-based HTTP client for API communication
- **Lucide Icons** – Lightweight and customizable SVG icon library
- **React Toastify** – User-friendly notifications and alerts
- **Date-fns** – Lightweight date utility library for formatting and date calculations

---

#### 🛠️ Backend
- **Node.js** – JavaScript runtime for scalable server-side development
- **Express.js** – Minimal and flexible backend framework
- **MongoDB** – NoSQL database for storing users and task data
- **JWT Authentication** – Secure token-based authentication
- **bcrypt** – Password hashing for enhanced security
- **validator** – Server-side input validation
- **dotenv** – Environment variable management
- **body-parser** – Request body parsing middleware
- **nodemon** – Development tool for auto-restarting the server

---

#### ☁️ Deployment
- Frontend and Backend hosted on **Render**
- RESTful API architecture for clean separation of concerns
- Environment-based configuration for security and scalability


### 📂 Project Structure
```
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   ├── taskModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── taskRoute.js
│   │   └── userRoute.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── frontend
    ├── public
    │   ├── LOGO.svg
    │   └── preview.png
    ├── src
    │   ├── assets
    │   │   └── dummy.jsx
    │   ├── components
    │   │   ├── Layout.jsx
    │   │   ├── Login.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Profile.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── SignUp.jsx
    │   │   ├── TaskItem.jsx
    │   │   └── TaskModal.jsx
    │   ├── pages
    │   │   ├── CompletePage.jsx
    │   │   ├── Dashboard.jsx
    │   │   └── PendingPage.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── vite.config.js

```

---

## 🗄️ Database Schema (MongoDB)

### User Collection
```
_id, name, email, password(hashed)
```

### Task Collection
```
_id, title, description, priority, dueDate, owner, completed, createdAt
```

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```
git clone https://github.com/your-username/taskmaster.git
cd taskmaster
```
### 2️⃣ Setup Backend
```
cd backend
npm install
npm start
```
### 3️⃣ Setup Frontend
```
cd frontend
npm install
npm run dev
```
### 4️⃣ Environment Variables
Create a **`.env`** file in backend:
```
JWT_SECRET=your_secret_key
```
### 5️⃣ Open in Browser
```
http://localhost:5173
``` 

---

## 🛠️ Installation Requirements

### Software Required
- Node.js (v18+)
- MongoDB
- Git
- Modern Web Browser


---

## 🔒 Security Considerations
- Passwords encrypted using bcrypt
- JWT-based authentication with expiration
- Protected API routes
- Token validation on each request
- Automatic session cleanup on expiry

---

## 📈 Scalability & Future Enhancements
- Role-based access (Admin / User)
- Task analytics & insights
- Drag-and-drop task management
- Team collaboration & shared boards
- Cloud-based notifications
- Mobile app version (React Native)
---

## ⭐ Contributing
Contributions, feature requests, and improvements are welcome!
Feel free to fork the repository and submit a pull request.

---

## 🙌 Acknowledgements
Built with ❤️ using React, Node.js, MongoDB, Tailwind CSS, and modern web technologies.

---

## 👤 Author

**[Subrata Bauri]()**  
Full Stack Developer
