import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Appointments from "./pages/Appointments";
import Services from "./pages/Services";
import Availability from "./pages/Availability";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Bounce, ToastContainer } from "react-toastify";
import ProtectedRoute from "./ui/ProtectedRoute";
import Account from "./pages/Account";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace path="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="business/:businessId" element={<Business />} />

          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="services" element={<Services />} />
            <Route path="availability" element={<Availability />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        pauseOnFocusLoss
        pauseOnHover
        transition={Bounce}
      />
    </QueryClientProvider>
  );
}

export default App;
