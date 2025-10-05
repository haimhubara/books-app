# 📚 Books App

Books App is a **full-stack virtual bookstore** where users can browse books, purchase them, and manage their personal collection in a dedicated dashboard.

The project is split into **two separate repositories**:  
- **Frontend:** [books-app-frontend](https://github.com/haimhubara/books-app)  
- **Backend:** [books-app-backend](https://github.com/haimhubara/books-app-backend)  

The backend is built with **FastAPI** and the frontend with **React + TailwindCSS**.

---

## live demo

**Frontend:** [View the live app](https://haimhubara-books-web.netlify.app/)  

**Backend (API):** [Render backend](https://books-backend-5tn6.onrender.com/docs) 


## 🚀 Features

- 🛍️ **Browse Books:** Explore a catalog of books with title, author, description, and rating.  
- ➕ **Add to Cart:** Add selected books to your shopping cart.  
- 💳 **Checkout / Purchase:** Complete your order and add books to your personal collection.  
- 📚 **Dashboard:** View all the books you’ve purchased.  
- 🔍 **Book Details:** Get detailed information about each book before buying.  
- ⚙️ **FastAPI Backend:** Handles book data, cart, orders, and user actions.  
- 🌐 **Frontend UI:** Clean and responsive interface for an easy user experience.  
- 🔑 **JWT Authentication:** Secure login and session management for users.  
- 🗄️ **PostgreSQL Database:** Stores users, books, orders, and featured books.

---

## 🧰 Tech Stack

**Frontend:**  
- React – component-based UI library for building interactive user interfaces  
- TailwindCSS – utility-first CSS framework for rapid and responsive design  
- Handles user interactions, dashboard, and API calls to the backend  
- Responsive design for desktop and mobile  
- Deployed on [Netlify](https://www.netlify.com/)  
- Source code: [GitHub Repository](https://github.com/haimhubara/books-app)

**Backend:**  
- Python  
- [FastAPI](https://fastapi.tiangolo.com/) – high-performance web framework for APIs  
- Uvicorn – ASGI server - Database: PostgreSQL  – storing books, users, orders, and featured books  
- Authentication: JWT (JSON Web Tokens) for secure user login and session management  
- Deployed on [Render](https://render.com/)  
- Source code: [GitHub Repository](https://github.com/haimgubara/books-app-backend)

---

## 📁 Project Structure

**Frontend (React + Tailwind):**

```
books-app/
├─ public/                 # Static files (HTML, images, etc.)
├─ src/                    # React source code
│   ├─ assets/             # Images, icons, fonts
│   ├─ components/         # Reusable React components
│   ├─ context/            # React context providers
│   ├─ hooks/              # Custom React hooks
│   ├─ pages/              # React pages (Dashboard, Home, etc.)
│   ├─ reducers/           # State management using useReducer
│   ├─ routes/             # App routing components
│   └─ services/           # API calls and utilities
├─ tailwind.config.js       # Tailwind configuration
└─ README.md
```

**Backend (FastAPI + PostgreSQL ):**

```
books-app-backend/
├─ src/                     # Python source code
│  ├─ main.py
│  ├─ models.py
│  ├─ database.py
│  ├─ routers/
│  └─ scripts/
├─ requirements.txt          # Python dependencies
├─ .env
└─ README.md
```
 

---

## 🔧 How To Run / Running Locally

### 1️⃣ Backend (FastAPI + MySQL)

```bash
# Clone the backend repository
git clone https://github.com/haimgubara/books-app-backend
cd books-app-backend

# (Optional) Create a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn books2:app --reload
```

- Backend URL: `http://127.0.0.1:8000`  
- API docs: `http://127.0.0.1:8000/docs`  

---

### 2️⃣ Frontend (React + TailwindCSS)

```bash
# Clone the frontend repository
git clone https://github.com/haimhubara/books-app
cd books-app

# Install dependencies
npm install

# Run the development server
npm start
```

- Frontend URL (Development): http://localhost:3000  
- API calls are configured using the `REACT_APP_HOST` environment variable.  
  - Set `REACT_APP_HOST` in your `.env` file to point to your backend URL, for example:  
    ```
    REACT_APP_HOST=http://127.0.0.1:8000
    ```
  - This allows you to easily change the backend URL without modifying the code.

---

## ⚙️ Deployment

- **Frontend:** Deployed on [Netlify](https://www.netlify.com/)  
- **Backend:** Deployed on [Render](https://render.com/)  

---

## 🔒 Authentication

- Users login with email/password.  
- Backend generates a **JWT token**.  
- Token is stored on the client sessionStorage.  
- All API requests include the token for authentication.

---

## 🗄️ Database

- **PostgreSQL ** stores:  
  - Users  
  - Books  
  - Orders  # Only books that have been successfully purchased
  - Featured books  
- Connection info should be stored in a `.env` file (not committed to GitHub).

