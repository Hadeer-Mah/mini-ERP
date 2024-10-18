import { useEffect, useState } from "react";
import DataTable from "../../components/SharedComponents/DataTable/DataTable";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import Searchbar from "../../components/SharedComponents/Searchbar/Searchbar";
import AddEmployee from "./AddEmployee/AddEmployee";
import trash from "../../assets/svgs/dataTable/trash.svg";
import active from "../../assets/svgs/dataTable/active.svg";
import inActive from "../../assets/svgs/dataTable/inActive.svg";


export default function Employees() {
  const [employeesList, setEmployeesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);

  const formattedEmployees = employeesList?.map((employee) => {
    return {
      "Employee": employee.Employee,
      "Start Date": employee.StartDate,
      "Phone": employee.Phone,
      "Email": employee.Email,
      "Role": employee.Role,
      "image": employee.image,
      "Active": <img src={employee.Active ? active : inActive} alt="status"className="w-[20px]"/>,
      "": <img src={trash} alt="delete" className="cursor-pointer w-[20px]"/>,
    };
  });

  useEffect(() => {
    const url = searchTerm
      ? `http://localhost:8000/employees?Employee=${encodeURIComponent(searchTerm)}`
      : "http://localhost:8000/employees";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEmployeesList(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, [searchTerm]);

  function openModalFunction() {
    setIsAddingEmployee(true);
  }
  return (
    <>
      {isAddingEmployee && (
        <AddEmployee
          openModal={isAddingEmployee}
          setOpenModal={setIsAddingEmployee}
        />
      )}
      <div className="rounded-2xl p-3 bg-white w-full">
        <div className="flex items-center gap-2">
          <div className="w-[calc(100%-170px)]">
            <Searchbar state={searchTerm} setState={setSearchTerm} placeholder={"Search Employees by Name"}/>
          </div>
          <MainButton
            btnTitle={"+ New Employee"}
            onClickFn={openModalFunction}
          />
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
          />
        </div>
      </div>
    </>
  );
}
