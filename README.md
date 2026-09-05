# Expenser - Full-Stack Expense Tracker

Expenser is a professional, full-stack web application designed to help users track their expenses with ease. Built with a modern tech stack, it offers a seamless experience for managing personal finances through intuitive dashboards, real-time charts, and secure authentication.

## 🚀 Features

### Frontend (React)
*   **Dynamic Dashboard**: A comprehensive overview of your spending habits.
*   **Interactive Charts**: Visual representation of expenses using Chart.js/Recharts.
*   **Real-time Management**: Add, view, and manage expenses with immediate UI updates.
*   **Responsive Design**: Fully optimized for desktop and mobile views.
*   **Offline Fallback**: Resilient UI that handles backend connectivity issues gracefully.
*   **Premium UI/UX**: Built with modern CSS practices, glassmorphism, and smooth transitions.

### Backend (Spring Boot)
*   **RESTful API**: Clean and documented API endpoints for expense management.
*   **Secure Authentication**: JWT-based security for user data protection.
*   **Persistent Storage**: MySQL database integration for reliable data handling.
*   **Environment Driven**: Configuration decoupled via environment variables.

## 🛠️ Tech Stack

**Frontend:**
*   React.js (Vite)
*   Vanilla CSS (Modern Layouts)
*   React Router DOM
*   Axios (API Communication)

**Backend:**
*   Java 21 / Spring Boot
*   Spring Security (JWT)
*   Spring Data JPA
*   MySQL

## 📁 Project Structure

The project follows a decoupled architecture:

```text
/
├── frontend/          # React application (Vite)
├── backend/           # Spring Boot application
└── README.md          # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites
*   Node.js (v18+)
*   Java 21 JDK
*   MySQL Server

### Backend Setup
1. Navigate to the `backend` directory.
2. Configure your database credentials in `src/main/resources/application.properties` (or use environment variables).
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your backend API URL:
   ```env
   VITE_API_URL=http://localhost:8080
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛡️ Engineering Excellence
*   **Memoized Rendering**: Optimized performance using `useMemo` and `useCallback`.
*   **Global Modal Management**: Seamless user interactions without layout shifts.
*   **Scalable Architecture**: Decoupled frontend and backend for independent deployment.

---
*Created with ❤️ by [Harsh Mishra](https://github.com/Harsh-Mishra28)*
