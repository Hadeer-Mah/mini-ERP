export default function JoinInfo({ employeeData = {} }) {
  return (
    <div className="flex gap-6 items-center px-3 py-5">
      <div className="font-medium text-[var(--secondary-color)]">
        start date
      </div>
      <p>
        {employeeData?.StartDate ? new Date(employeeData?.StartDate)
          .toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })
          .replace(/-/g, " / ") : ""}
      </p>
    </div>
  );
}
