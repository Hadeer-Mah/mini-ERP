import { Navigate, Route, Routes } from "react-router-dom"
import Employees from "../pages/Employees/Employees"
import EmployeeDetails from "../pages/Employees/EmployeeDetails/EmployeeDetails"

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to={"/employees"} />}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/employees/:employeeId" element={<EmployeeDetails/>}/>
    </Routes>
  )
}
