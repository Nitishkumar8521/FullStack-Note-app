# 📝 ToDo App (MERN + Chakra UI)

A simple and responsive full-stack ToDo web application built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled using **Chakra UI**.

---

## 🚀 Tech Stack

### 🔧 Frontend
- **React** (v18.3.1)
- **Chakra UI** for UI components
- **Framer Motion** for animations
- **Axios** for HTTP requests
- **React Router DOM** for routing

### 🔧 Backend
- **Express.js** (v4.19.2)
- **MongoDB** with **Mongoose**
- **bcrypt** for password hashing
- **jsonwebtoken** for authentication
- **dotenv** for environment variable management
- **CORS** for cross-origin resource sharing
- **nodemon** for development

---

## 📂 Project Structure

```bash
📦FULL_STACK_NOTE_APP/
├── 📁note-app-frontend (React + Chakra UI)
│ ├── public/
│ └── src/
|    |- Images/
|    |- pages/
|    |- Status/
|    |- App.jsx
|    |- main.jsx
├── 📁server/ # Backend (Node.js + Express + MongoDB)
│ |- models/
│ |- route/
│ |- middleware/
| |- .env
| |- index.js
| |- package.json
| |- README.md
```

---

## 🛠️ Setup Instructions

### 📌 Prerequisites

- Node.js (v16+ recommended)
- MongoDB installed locally or use MongoDB Atlas

---

### ⚙️ Backend Setup

```bash
cd server
npm install
npm run dev
```
### 💻 Frontend Setup

```bash
npm install
npm run dev
The frontend will start on: http://localhost:5173
```

### 🔐 Features
- ✅ User Authentication (Register/Login)

- ✅ Add and Delete ToDos

- ✅ Role based access control

- ✅ Responsive UI with Chakra UI

- ✅ Protected Routes using JWT

- ✅ Persistent ToDos per user

### 📸 Screenshots

- #### 🏠 Landing Page
![App Screenshot](https://github.com/Nitishkumar8521/FullStack-Note-app/blob/main/note-app-frontend/src/Images/Landing%20page.jpg?raw=true)

- #### 📝 Register Page
![App Screenshot](https://github.com/Nitishkumar8521/FullStack-Note-app/blob/main/note-app-frontend/src/Images/Register%20page.jpg?raw=true)

- #### 🔐 Login Page
![App Screenshot](https://github.com/Nitishkumar8521/FullStack-Note-app/blob/main/note-app-frontend/src/Images/login.jpg?raw=true)

- #### 📒 Notes Page (ToDos)
![App Screenshot](https://github.com/Nitishkumar8521/FullStack-Note-app/blob/main/note-app-frontend/src/Images/Notes%20page.jpg?raw=true)

### 🔁 API Routes (Backend)

#### 🔐 User Routes
| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | /register      | Register a new user |
| POST   | /login         | Login and get token |

#### 📝 ToDo Routes
| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | /                | Get all todos (user)|
| POST   | /create          | Create new todo     |
| PATCH  | /update/:id      | Update a todo       |
| DELETE | /delete-note/:id | Delete a todo       |

### Follow these steps to set up and run the project:

#### 1.Clone the repository:

```bash
git clone https://github.com/Nitishkumar8521/FullStack-Note-app.git
cd FullStack-Note-app
```

#### 2.Install dependencies:

```bash
npm install
```

#### 3.Run the development server:

```bash
npm run dev
```

#### 4.Open in browser:

```bash
Visit http://localhost:5173/ to view the app
```

### Deployment

You can access the live project here:

[Live Demo](https://sparkly-melomakarona-9f7c32.netlify.app)


## Future Enhancements

- Add a backend for note editing

- Improve accessibility features

## Author

Developed by **Nitish Kumar Singh.** Feel free to contribute or provide feedback!
