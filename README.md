# 🚀 EXPENSER - Pro Full-Stack Expense Tracker

A premium, full-stack financial management dashboard built with **React (Vite)** and **Spring Boot**. Features a high-performance UI with real-time analytics, secure data persistence, and a sleek modern aesthetic.

![Dashboard Preview](https://via.placeholder.com/1200x600?text=Expenser+Dashboard+Preview)

## ✨ Core Features

- **💎 Premium UI/UX**: Crafted with Tailwind CSS and Framer Motion for smooth animations and a "FinTech" professional feel.
- **📊 Advanced Analytics**: Interactive Pie and Bar charts using Recharts to visualize spending patterns.
- **🌓 Adaptive Dark Mode**: Full support for both light and dark themes with persistent user preference.
- **🔍 Real-time Search & Filter**: Instant search across descriptions and categories with high-performance filtering.
- **⚡ Fast Performance**: Optimized with React `useMemo` and `useCallback` to handle large datasets efficiently.
- **📥 CSV Export**: One-click export of your entire transaction history to a CSV file for external analysis.
- **📱 Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile viewing.
- **🛡️ Secure Backend**: Spring Boot REST API with MySQL persistence and proper CORS configuration.
- **🔄 Smart Syncing**: Real-time synchronization between the frontend state and the MySQL database.
- **🗃️ Batch Operations**: Ability to clear all records with a single, secure action.

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Notifications**: React Hot Toast

### Backend
- **Framework**: Spring Boot 3.x
- **Language**: Java 21
- **Persistence**: Spring Data JPA (Hibernate)
- **Database**: MySQL 8.0

## 🚀 Getting Started

### Prerequisites
- Java 21 JDK
- Node.js (v18+)
- MySQL Server

### 1. Database Setup
Create a schema named `expense_tracker` in your MySQL server:
```sql
CREATE DATABASE expense_tracker;
```

### 2. Backend Configuration
Navigate to `backend/src/main/resources/application.properties` and update your database credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=your_username
spring.datasource.password=your_password
```
Run the backend:
```bash
cd backend
mvn spring-boot:run
```

### 3. Frontend Configuration
Navigate to the root directory and create a `.env` file:
```env
VITE_API_URL=http://localhost:8080
```
Install dependencies and run:
```bash
npm install
npm run dev
```

## 📡 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/expenses` | Fetch all expenses |
| `POST` | `/api/expenses` | Add a new expense |
| `DELETE` | `/api/expenses/{id}` | Delete a specific expense |
| `DELETE` | `/api/expenses/clear-all` | Delete all records |

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ by [Harsh Mishra](https://github.com/Harsh-Mishra28)
