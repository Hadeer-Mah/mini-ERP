import GeneralInfo from "./GeneralInfo/GeneralInfo";
import JoinInfo from "./JoinInfo/JoinInfo";
import StatusInfo from "./StatusInfo/StatusInfo";

export default function InfoCard({
  children,
  title,
  dataType = "",
  employee = {},
  state = {},
  setState = () => {},
  name = "",
  disabled = false,
  imageFile
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#F8F9FA] p-3 overflow-auto box-shadow">
      <div className="bg-[var(--heading-bg)] rounded-[7px] py-2 px-3 font-medium">
        {title}
      </div>
      {dataType === "general" ? (
        <GeneralInfo employeeData={employee} imageFile={imageFile} />
      ) : dataType === "date" ? (
        <JoinInfo employeeData={employee} />
      ) : (
        dataType === "status" && <StatusInfo employeeData={employee} state={state} setState={setState} name={name} disabled={disabled} />
      )}
    </div>
  );
}
