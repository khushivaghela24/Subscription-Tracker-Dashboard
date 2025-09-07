# Subscription-Tracker-Dashboard

A full-stack web application built using the **MERN stack** (MongoDB, Express, React, Node.js) that helps users **track, manage, and get reminders for their subscriptions** in one place.  

---

## 🚀 Features

- 🔐 **User Authentication** (Sign Up / Sign In)
- 📊 **Dashboard** to view all subscriptions in table format
- ➕ **Add / Edit / Delete Subscriptions**
- 🔔 **Renewal Reminders** via Email Notifications
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
- Node-Cron (for reminders)  

**Other Tools:**
- Nodemailer (Email Reminders)  
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

Create a .env file inside Backend/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

Run backend:

npx nodemon server.js

Backend runs on http://localhost:5000

3️⃣ Setup Frontend

cd Frontend/subs
npm install
npm start

Frontend runs on http://localhost:3000

🔮 Future Enhancements

📱 Mobile App (React Native / Flutter)

🤖 AI-based subscription cost prediction & insights

💳 Secure Payment Integration

🌍 Multi-language & Multi-currency support

📜 License

🙌 Contributors
Vaghela Khushi Jitendra Kumar – Developer
Patel Suhani Manojbhai - Developer