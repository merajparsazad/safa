# Safa 🛠️

A modern **appointment scheduling web application** built with **React** that provides a seamless experience for managing businesses, services, and customer appointments.
Users can browse services, book appointments, update or cancel them, and businesses can manage their schedules in real time with proper status updates, notifications, and analytics.

---

## ✨ Features

### Authentication & User Management

- 🔑 Login system with user context
- 🆕 Signup functionality via modal form with React Query integration
- 👤 Account page with editable full name, email, avatar, and password
- 🖼️ User avatar display

### Appointments Management

- 📅 Create, update status (pending, confirmed, canceled), and delete appointments
- 🛠️ Custom hooks for clean logic separation (e.g., `useUpdateAppointments`, `useRecentAppointments`)
- ⚡ Server state management with React Query
- 🧾 Dashboard with recent appointments overview and date-based filtering
- 📊 Charts for business analytics (Sales over time, Service usage)
- Today’s activity list with real-time status updates

### Services Management

- 🛒 Add, edit, and remove business services
- Service usage visualization in dashboard charts

### UI/UX Enhancements

- 🎛️ Toast notifications using React Toastify
- ❌ Error boundaries using `react-error-boundary` with fallback component
- 💡 Helper functions for date formatting

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router Dom, React Hook Form, React Icons
- **State & Data:** React Query (@tanstack/react-query) + Devtools
- **Charts & Date Handling:** Recharts, date-fns
- **Styling:** TailwindCSS
- **UI Enhancements:** React Toastify, Modal components
- **Backend (Mock API):** JSON Server
- **Build Tools:** Vite
- **Linting & Formatting:** ESLint (React, Hooks, JSX-a11y) & Prettier

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/merajparsazad/safa.git

# Navigate to the project folder
cd safa

# Install dependencies
npm install

# Start development server
npm run server
npm run dev
```
