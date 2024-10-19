import logo from "../../../assets/svgs/sidebar/logo.svg";
import Dashboard from "../../../assets/svgs/sidebar/dashboard.svg?react";
import Teams from "../../../assets/svgs/sidebar/teams.svg?react";
import Employees from "../../../assets/svgs/sidebar/employees.svg?react";
import Settings from "../../../assets/svgs/sidebar/settings.svg?react";
import Dropdown from "../../../assets/svgs/sidebar/dropdown.svg?react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const navLinks = [
    {
      icon: <Dashboard />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Teams />,
      title: "Teams",
      path: "/teams",
    },
    {
      icon: <Employees />,
      title: "Employees",
      path: "/employees",
    },
  ];

  function activeLink(link) {
    if (window.location.pathname.startsWith(`/${link?.split("/")[1]}`)) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="w-[250px] h-svh bg-[--primary-color] px-2 py-6 sidebar sticky top-0 bottom-0">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="cursor-pointer" onClick={()=> navigate("/employees")} />
      </div>
      <ul className="flex flex-col gap-3 py-8">
        {navLinks?.map((link, i) => {
          return (
            <li
              key={i}
              className={`px-4 py-2 rounded-xl flex gap-3 items-center font-medium cursor-pointer ${
                activeLink(link.path)
                  ? "bg-[white] text-[var(--primary-color)] active-link"
                  : "text-white inactive-link"
              }`}
              onClick={() => {
                navigate(link.path);
              }}
            >
              {link.icon}
              <span className="list-title">{link?.title}</span>
            </li>
          );
        })}
        <li className="flex justify-between items-center">
          <div className="px-4 py-2 rounded-xl flex gap-3 items-center font-medium text-white inactive-link">
            <Settings />
            <span className="list-title">Settings</span>
          </div>
          <Dropdown className="cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}
