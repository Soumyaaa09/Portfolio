# 🚀 Personal Portfolio Website

A modern and responsive full-stack portfolio website built using React.js, Node.js, Express.js, and MongoDB Atlas.  
This portfolio showcases my projects, skills, education, and contact information with a clean UI, smooth animations, and dynamic project management.

---

# 🌐 Live Demo

Frontend: https://your-vercel-link.vercel.app  
Backend API: https://your-render-link.onrender.com

---

# ✨ Features

- Modern responsive UI
- Smooth animations using Framer Motion
- Dynamic projects section from MongoDB
- Full-stack MERN architecture
- Contact form backend integration
- MongoDB Atlas database connection
- GitHub project links
- Fully deployed using Vercel & Render
- Dark futuristic UI design

---

# 🛠️ Tech Stack

## Frontend
- React.js
- CSS3
- Framer Motion
- Axios
- React Icons

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```bash
Portfolio/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── projectController.js
│   │   └── messageController.js
│   │
│   ├── models/
│   │   ├── Project.js
│   │   └── Message.js
│   │
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   └── messageRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Soumyaaa09/Portfolio.git
cd Portfolio
```

---

# 🚀 Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🚀 Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

# 📦 API Routes

## Projects

```bash
GET /api/projects
```

## Messages

```bash
POST /api/messages
```

---

# 📸 Screenshots

## Home Page
Modern animated hero section with futuristic UI.

## Projects Section
Dynamic projects fetched from MongoDB Atlas.

## Contact Section
Functional contact form connected to backend.

---

# 👨‍💻 Author

## Soumya Ranjan Rout

- BCA Student
- Aspiring Cloud Engineer
- Full Stack Developer

GitHub: https://github.com/Soumyaaa09

---

# ⭐ Future Improvements

- Admin dashboard
- Blog section
- Authentication
- 3D interactive models
- AWS cloud integration

---

# 📜 License

This project is open source and available under the MIT License.
