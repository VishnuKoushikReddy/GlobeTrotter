🌍 GlobeTrotter – Smart Travel Planning Web Application

GlobeTrotter is a full-stack web application designed to help users **plan, manage, and track their travel journeys** efficiently. It allows users to create trips, manage itineraries, track trip status, and maintain a personalized user profile — all through a clean and intuitive interface.

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* Secure password hashing using **bcrypt**
* Session-based authentication
* Logout functionality

### 👤 User Profile

* View and edit user profile
* Upload and update profile picture
* Store personal details (name, city, country, about)
* Display profile image across the application

### ✈️ Trip Management

* Create new travel plans
* Edit and update existing trips
* Delete trips
* View individual trip details
* Set and update trip **status**:

  * Upcoming
  * Ongoing
  * Completed

### 📊 Dashboard

* Personalized dashboard after login
* Banner with travel-themed image
* Search trips by **title or place**
* Filter trips by **status**
* Sort trips by **start date or created date**
* Quick navigation to profile and trips

### 🖼 Image Uploads

* Profile image upload using **Multer**
* Secure image type validation (JPG / PNG)
* Images stored on server, paths stored in database

## 🛠 Tech Stack

### Frontend

* HTML
* CSS (custom styling, no Bootstrap dependency)
* EJS (Embedded JavaScript Templates)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### Other Tools & Libraries

* Multer (image uploads)
* bcrypt (password hashing)
* express-session (session management)
* dotenv (environment variables)

---

## 📂 Project Structure

GlobeTrotter/
│
├── public/
│   ├── css/
│   ├── images/
│   └── uploads/
│       └── profile/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── views/
│       ├── auth/
│       ├── dashboard/
│       ├── profile/
│       └── trip/
│
├── server.js
├── .env
├── package.json
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/globetrotter.git
cd globetrotter

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

SESSION_SECRET=your_secret_key

### 4️⃣ Start the Server

node server.js

### 5️⃣ Open in Browser

http://localhost:3000

## 🔐 Default Routes

| Route            | Description       |
| ---------------- | ----------------- |
| `/auth/register` | User registration |
| `/auth/login`    | User login        |
| `/dashboard`     | User dashboard    |
| `/profile`       | User profile      |
| `/trip/create`   | Create new trip   |
| `/auth/logout`   | Logout            |

## 🧠 Design Decisions

* **Clear separation of concerns** (MVC architecture)
* Trip status is managed at the **trip level**, not user level
* Server-side search, filtering, and sorting for scalability
* Image paths stored in DB, not binary data
* Secure session handling with protected routes

## 🎯 Future Enhancements

* Multi-city itinerary planning
* Budget planning per trip
* Activity scheduling
* Map integration
* Mobile responsiveness
* Profile image preview before upload

## 👨‍💻 Author

Developed by **Vasu**
SOC Analyst L1 | Cybersecurity & Full-Stack Enthusiast

## 📜 License

This project is for **educational and hackathon purposes**.
* Add **API documentation**
* Create **presentation-ready explanation**
* Prepare **hackathon pitch content**

Just tell me what you want next.
