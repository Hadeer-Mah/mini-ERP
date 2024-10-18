import { useState } from "react";
import DataTable from "../../components/SharedComponents/DataTable/DataTable";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import Searchbar from "../../components/SharedComponents/Searchbar/Searchbar";
import AddEmployee from "./AddEmployee/AddEmployee";

export default function Employees() {
  const [isAddingEmployee, setIsAddingEmployee] = useState(false)
  console.log(isAddingEmployee)
  const employeesData = [
    {
      id: 1,
      Employee: "Ahmed",
      Role: "IT",
      Email: "example@gmail.com",
      Phone: "010102039",
      "Start Date": "1/1/2020",
      Active: true,
      "": "delete icon",
    },
    {
      id: 2,
      Employee: "Ahmed2",
      Role: "IT",
      Email: "example@gmail.com",
      Phone: "010102039",
      "Start Date": "1/1/2020",
      Active: true,
      "": "delete icon",
    },
    {
      id: 3,
      Employee: "Ahmed3",
      Role: "IT",
      Email: "example@gmail.com",
      Phone: "010102039",
      "Start Date": "1/1/2020",
      Active: true,
      "": "delete icon",
    },
  ];
  function openModalFunction() {
    setIsAddingEmployee(true);
  }
  return (
    <>
    {isAddingEmployee && (
        <AddEmployee openModal={isAddingEmployee} setOpenModal={setIsAddingEmployee} />
      )}
    <div className="rounded-2xl p-3 bg-white w-full">
      <div className="flex items-center gap-2">
        <div className="w-[calc(100%-170px)]">
          <Searchbar />
        </div>
        <MainButton btnTitle={"+ New Employee"} onClickFn={openModalFunction}/>
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
          tableRows={employeesData}
        />
      </div>
    </div>
    </>
  );
}
