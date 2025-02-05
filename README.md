# 🎮 Chill Gamer

**Chill Gamer** is a dynamic and interactive gaming review platform where users can explore, add, and manage game reviews. The platform features functionalities like sorting reviews, managing watchlists, and browsing games by rating, year, and genre.

---

## 🌐 Live Demo

🔗 **Live Link**: [Chill Gamer](https://chillgamer-eaa4c.web.app)

---

## 🚀 Features

- **All Reviews Page**: View all available game reviews with options to sort by **Rating** or **Year** in descending order.
- **Highest Rated Games**: Displays the highest-rated games on the platform.
- **Recently Added Games**: Highlights the latest games added to the platform.
- **Watchlist**: Allows logged-in users to add games to their personal watchlist and manage them.
- **My Reviews**: A private page where users can see, update, or delete their own reviews.
- **Add Review**: Logged-in users can add reviews of games.
- **Review Update and Delete**: Logged-in users can update or delete their reviews.

---

## 🛠 Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **Tailwind CSS**: For responsive and modern UI styling.
- **React Router**: For seamless navigation and routing.

### Backend

- **Node.js**: For the server-side logic.
- **Express.js**: To handle routing and API endpoints.
- **MongoDB**: For database storage and retrieval.
- **Firebase Authentication**: For secure user login and signup.

---

## 📦 Dependencies

The following dependencies are used in this project:

```json
"dependencies": {
  "firebase": "^11.0.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-simple-typewriter": "^5.0.1",
  "react-tooltip": "^5.28.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
}
```

---

## 🏗 Installation & Setup

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/chillgamer.git
cd chillgamer
```

### 2️⃣ Frontend Setup (React.js)  
```sh
cd client
npm install
npm start
```
👉 This will start the frontend at `http://localhost:5173/`

---

### 3️⃣ Backend Setup (Node.js & Express.js)  
```sh
cd server
npm install
npm start
```
👉 This will start the backend at `http://localhost:5000/`

---

## 📜 How to Run Locally

1. **Clone the repository**: `git clone https://github.com/yourusername/chillgamer.git`
2. **Navigate to the project directory**: `cd chillgamer`
3. **Setup the frontend**:
   - `cd client`
   - `npm install`
   - `npm start`
4. **Setup the backend**:
   - `cd server`
   - `npm install`
   - `npm start`
5. Open your browser and navigate to `http://localhost:3000/`

---

## 📩 API & Environment Variables

Create a `.env` file in the **server** directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
FIREBASE_API_KEY=your_firebase_api_key
```

Create a `.env.local` file in the **client** directory and add:
```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
```

---



## 📜 License
This project is licensed under the MIT License.

Happy Coding! 🎮🚀
