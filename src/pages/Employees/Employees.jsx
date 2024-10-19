import { useEffect, useState } from "react";
import DataTable from "../../components/SharedComponents/DataTable/DataTable";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import Searchbar from "../../components/SharedComponents/Searchbar/Searchbar";
import AddEmployee from "./AddEmployee/AddEmployee";
import trash from "../../assets/svgs/dataTable/trash.svg";
import active from "../../assets/svgs/dataTable/active.svg";
import inActive from "../../assets/svgs/dataTable/inActive.svg";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate();
  const [employeesList, setEmployeesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsCount, setItemsCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);

  const formattedEmployees = employeesList?.map((employee) => {
    return {
      Employee: (
        <div className="flex gap-1 items-center">
          {employee.Image && <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src={employee.Image}
              alt="user image"
              className="object-contain"
            />
          </div>}
          <p>{employee.Employee}</p>
        </div>
      ),
      "Start Date": new Date(employee.StartDate)
        .toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .replace(/-/g, " / "),
      Phone: employee.Phone,
      Email: employee.Email,
      Role: employee.Role,
      image: employee.image,
      Active: (
        <img
          src={employee.Active ? active : inActive}
          alt="status"
          className="w-[20px]"
        />
      ),
      "": <div className="cursor-pointer w-[20px] h-[20px]"><img src={trash} alt="delete" /></div>,
      rowClick: () => {
        navigate(`/employees/${employee.id}`);
      },
    };
  });

  useEffect(() => {
    const url =`http://localhost:8000/employees?Employee=${encodeURIComponent(
          searchTerm
        )}&_page=${activePage}&_limit=8&timestamp=${new Date().getTime()}&_sort=id&_order=asc`

    const fetchEmployees = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.headers.get("X-Total-Count")) {
          const totalResponse = await fetch(`http://localhost:8000/employees`);
          const totalData = await totalResponse.json();
          setItemsCount(totalData?.length);
        } else {
          setItemsCount(response.headers.get("X-Total-Count"));
        }

        setEmployeesList(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [searchTerm, activePage]);

  function openModalFunction() {
    setIsAddingEmployee(true);
  }
  console.log(employeesList, "list");
  return (
    <>
      {isAddingEmployee && (
        <AddEmployee
          openModal={isAddingEmployee}
          setOpenModal={setIsAddingEmployee}
        />
      )}
      <div className="rounded-2xl p-3 bg-white w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-[calc(100%-170px)] searchbar">
            <Searchbar
              state={searchTerm}
              setState={setSearchTerm}
              setActivePage={setActivePage}
              placeholder={"Search Employees by Name"}
            />
          </div>
          <div className="action-btn">
            <MainButton
              btnTitle={"+ New Employee"}
              onClickFn={openModalFunction}
            />
          </div>
        </div>
        <div className="my-6 overflow-hidde w-full">
          <DataTable
            mapKey={"id"}
            tableColumns={[
              "Employee",
              "Role",
              "Email",
              "Phone",
              "Start Date",
              "Active",
              "",
            ]}
            tableRows={formattedEmployees}
            itemsCount={itemsCount}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </div>
    </>
  );
}
