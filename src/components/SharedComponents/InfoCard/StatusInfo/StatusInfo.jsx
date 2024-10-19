import ToggleButton from "../../ToggleButton/ToggleButton";

export default function StatusInfo({ employeeData = {}, state = {}, setState = () => {}, name = "", disabled = false }) {
  return (
    <div className="flex gap-6 items-center px-3 py-5">
      <p className="font-medium text-[var(--secondary-color)]">status</p>
      <ToggleButton isActive={employeeData?.Active} disabled={disabled} name={name} state={state} setState={setState}/>
    </div>
  );
}
