import MainButton from "../../../components/SharedComponents/MainButton/MainButton";
import arrow from "../../../assets/svgs/arrow.svg";
import InfoCard from "../../../components/SharedComponents/InfoCard/InfoCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoaderSpinner from "../../../components/SharedComponents/LoaderSpinner/LoaderSpinner";

export default function EmployeeDetails() {
  const { employeeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/employees/${employeeId}`)
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      ).finally(()=>setIsLoading(false))
  }, [employeeId]);
  return (
    <>
    {isLoading && <LoaderSpinner/>}
      <div className="flex justify-between items-center mb-3 flex-wrap">
        <div className="flex gap-1 items-center flex-wrap">
          <p className="text-[26px] font-medium">Employees</p>
          <img src={arrow} alt="arrow" />
          <p className="text-xl font-medium text-[var(--secondary-color)]">
            {employeeData?.Employee}
          </p>
        </div>
        <MainButton btnTitle={"Edit Employee"} />
      </div>
      <InfoCard
        title={"summary"}
        dataType={"general"}
        employee={employeeData}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
        <InfoCard title={"Date"} dataType={"date"} employee={employeeData} />
        <InfoCard
          title={"Active"}
          dataType={"status"}
          employee={employeeData}
          disabled={true}
        />
      </div>
    </>
  );
}
