# Subscription-Tracker-Dashboard

A full-stack web application built using the **MERN stack** (MongoDB, Express, React, Node.js) that helps users **track, manage, and get reminders for their subscriptions** in one place.  

---

## 🚀 Features

- 🔐 **User Authentication** (Sign Up / Sign In)
- 📊 **Dashboard** to view all subscriptions in table format
- ➕ **Add / Edit / Delete / View Subscriptions**
- 💸 **Analytics** to track expenses and visualize spending
- 🕒 **Automated CRON jobs** to send timely reminders
- 🌐 **Responsive UI** with modern design
- 📱 **Contact Us** & **About Us** sections for better usability

---

## 🛠️ Tech Stack

**Frontend:**
- React.js  
- Tailwind CSS  

**Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

**Other Tools:** 
- JWT Authentication  
- dotenv, cors  

---

## 📂 Project Structure

Subscription-Tracker-Dashboard/
│
├── Backend/ # Express + MongoDB backend
│ ├── config/ # DB connection
│ ├── models/ # User & Subscription schemas
│ ├── routes/ # API routes (auth, subscriptions, reminders)
│ ├── utils/ # Email sender
│ └── server.js # Main backend entry point
│
├── Frontend/ # React frontend
│ └── subs/src/ # React components, pages & styles
│ ├── components/
│ ├── pages/
│ └── Myapp.js
│
└── README.md # Project documentation

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/khushivaghela24/Subscription-Tracker-Dashboard.git
cd Subscription-Tracker-Dashboard

2️⃣ Setup Backend

cd Backend
npm install

Run backend:

npx nodemon server.js

Backend runs on http://localhost:5000

3️⃣ Setup Frontend

cd Frontend/subs
npm install
npm start

4️⃣ Access the App

Open your browser and go to: http://localhost:3000
Signup as a new user

Explore the Dashboard to:
➕ Add a new subscription
👀 View all your subscriptions
✏️ Edit or ❌ Delete subscriptions
💡 Get reminders

For Demo:
Signin as khushivaghela3001@gmail.com with Password 123456

Explore the Dashboard to:
👀 View all subscriptions
➕ Add a new subscription
✏️ Edit or ❌ Delete subscriptions
💡 Get reminders

Frontend runs on http://localhost:3000

🔮 Future Enhancements

📱 Mobile App 

🤖 AI-based subscription suggestions

💳 Multiple Payment Integration

🌍 Advanced Analytics

🙌 Contributors
Vaghela Khushi Jitendra Kumar – Developer
Patel Suhani Manojbhai - Developer
