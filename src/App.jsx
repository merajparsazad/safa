import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Calender from "./pages/Calender";
import Appointments from "./pages/Appointments";
import Services from "./pages/Services";
import Availability from "./pages/Availability";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace path="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="business/:businessId" element={<Business />} />

        <Route element>
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="calender" element={<Calender />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="services" element={<Services />} />
            <Route path="availability" element={<Availability />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
