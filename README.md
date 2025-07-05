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

#### Landing page

