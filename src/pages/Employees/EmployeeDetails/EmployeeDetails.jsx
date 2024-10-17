import MainButton from "../../../components/SharedComponents/MainButton/MainButton";
import arrow from "../../../assets/svgs/arrow.svg";
import InfoCard from "../../../components/SharedComponents/InfoCard/InfoCard";
import ToggleButton from "../../../components/SharedComponents/ToggleButton/ToggleButton";
import user from "../../../assets/svgs/navbar/user.svg"

export default function EmployeeDetails() {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
          <p className="text-[26px] font-medium">Employees</p>
          <img src={arrow} alt="arrow" />
          <p className="text-xl font-medium text-[var(--secondary-color)]">
            Ahmed Ali
          </p>
        </div>
        <MainButton btnTitle={"Edit Employee"} />
      </div>
      <InfoCard title={"summary"}>
        <div className="px-3 py-5 flex flex-col gap-3">
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Employee</p>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full">
                <img src={user} alt="user" className="w-full h-full object-contain"/>
              </div>
              Ahmed Ali
            </div>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Role</p>
            <p>IT</p>
          </div><div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Email</p>
            <p>Example@gmail.com</p>
          </div>
          <div className="flex -items-center">
            <p className="font-medium text-[var(--secondary-color)] w-[150px]">Phone</p>
            <p>0118227678</p>
          </div>
        </div>
      </InfoCard>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
        <InfoCard title={"Date"}>
          <div className="flex gap-6 items-center px-3 py-5">
            <p className="font-medium text-[var(--secondary-color)]">start date</p>
            <p>10/6/2024</p>
          </div>
        </InfoCard>
        <InfoCard title={"Active"}>
          <div className="flex gap-6 items-center px-3 py-5">
            <p className="font-medium text-[var(--secondary-color)]">status</p>
            <ToggleButton checked={true} onChange={() => {}} />
          </div>
        </InfoCard>
      </div>
    </>
  );
}
