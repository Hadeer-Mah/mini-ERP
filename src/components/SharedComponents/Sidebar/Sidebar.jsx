import logo from "../../../assets/svgs/sidebar/logo.svg";
import Dashboard from "../../../assets/svgs/sidebar/dashboard.svg?react";
import Teams from "../../../assets/svgs/sidebar/teams.svg?react";
import Employees from "../../../assets/svgs/sidebar/employees.svg?react";
import Settings from "../../../assets/svgs/sidebar/settings.svg?react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const navLinks = [
    {
      icon:<Dashboard/>,
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      icon:<Teams/>,
      title: "Teams",
      path: "/teams"
    },
    {
      icon:<Employees/>,
      title: "Employees",
      path: "/employees"
    },
    {
      icon:<Settings/>,
      title: "Settings",
      path: "/settings"
    }

  ]

  function activeLink(link) {
    if (window.location.pathname.startsWith(`/${link?.split("/")[1]}`)) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="w-full h-svh bg-[--primary-color] px-2 py-6">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex flex-col gap-3 py-8">
        {navLinks?.map((link, i) => {
          return <li key={i} className={`px-4 py-2 rounded-xl text-[white] flex gap-3 items-center font-medium cursor-pointer ${activeLink(link.path) ? "bg-[white] text-[var(--primary-color)]" : ""}`} onClick={()=>{
            navigate(link.path)
          }}>
            {link.icon}
            {link?.title}
          </li>
        })}
      </ul>
    </div>
  )
}
