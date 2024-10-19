import MainButton from "../../../components/SharedComponents/MainButton/MainButton";
import arrow from "../../../assets/svgs/arrow.svg";
import InfoCard from "../../../components/SharedComponents/InfoCard/InfoCard";
import ToggleButton from "../../../components/SharedComponents/ToggleButton/ToggleButton";
import user from "../../../assets/svgs/navbar/user.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EmployeeDetails() {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/employees/${employeeId}`)
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [employeeId]);
  console.log(employeeData, "employee data");
  return (
    <>
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
      <InfoCard title={"summary"}>
        <div className="px-3 py-5 flex flex-col gap-3">
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">
              Employee
            </p>
            <div className="flex items-center gap-1">
              {employeeData?.Image && (
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={employeeData?.Image}
                    alt="user"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {employeeData?.Employee}
            </div>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">
              Role
            </p>
            <p>{employeeData?.Role}</p>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">
              Email
            </p>
            <p>{employeeData?.Email}</p>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">
              Phone
            </p>
            <p>{employeeData?.Phone}</p>
          </div>
        </div>
      </InfoCard>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
        <InfoCard title={"Date"}>
          <div className="flex gap-6 items-center px-3 py-5">
            <div className="font-medium text-[var(--secondary-color)]">
              start date
            </div>
            <p>
              {new Date(employeeData?.StartDate)
                .toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
                .replace(/-/g, " / ")}
            </p>
          </div>
        </InfoCard>
        <InfoCard title={"Active"}>
          <div className="flex gap-6 items-center px-3 py-5">
            <p className="font-medium text-[var(--secondary-color)]">status</p>
            <ToggleButton isActive={employeeData?.Active} disabled={true} />
          </div>
        </InfoCard>
      </div>
    </>
  );
}
