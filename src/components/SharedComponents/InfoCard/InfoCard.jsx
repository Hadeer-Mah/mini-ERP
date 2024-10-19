
export default function InfoCard({ children, title }) {
  return (
    <div className="bg-white rounded-2xl border border-[#F8F9FA] p-3 overflow-auto box-shadow">
      <div className="bg-[var(--heading-bg)] rounded-[7px] py-2 px-3 font-medium">
        {title}
      </div>
      {children}
    </div>
  );
}
