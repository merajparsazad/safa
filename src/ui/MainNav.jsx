import {
  MdCalendarMonth,
  MdOutlineFactCheck,
  MdOutlineHomeRepairService,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { TbClockQuestion, TbSettings, TbUsersGroup } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function MainNav() {
  const navItems = [
    { to: "dashboard", label: "داشبورد", icon: <MdOutlineSpaceDashboard /> },
    { to: "calendar", label: "تقویم", icon: <MdCalendarMonth /> },
    { to: "appointments", label: "نوبت‌ها", icon: <MdOutlineFactCheck /> },
    { to: "services", label: "خدمات", icon: <MdOutlineHomeRepairService /> },
    { to: "availability", label: "زمان‌های آزاد", icon: <TbClockQuestion /> },
    { to: "customers", label: "مشتریان", icon: <TbUsersGroup /> },
    { to: "settings", label: "تنظیمات", icon: <TbSettings /> },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-4 px-9 py-4 text-2xl font-medium text-gray-600 transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-gray-800 active:rounded-md active:bg-gray-100 active:text-gray-800 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-gray-400 [&>svg]:transition-colors [&>svg]:duration-300 hover:[&>svg]:text-blue-600 active:[&>svg]:text-blue-600 ${isActive ? "rounded-md bg-gray-100 text-gray-800 hover:[&>svg]:text-blue-600" : ""}`
              }
              to={item.to}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
