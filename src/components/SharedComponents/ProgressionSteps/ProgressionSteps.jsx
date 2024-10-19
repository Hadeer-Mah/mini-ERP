import dotLine from "../../../assets/svgs/dots.svg";

export default function ProgressionSteps({ activeSection }) {
  return (
    <div className="flex gap-2 items-center flex-wrap justify-center">
      <div className="flex flex-col gap-2 items-center">
        <div
          className={`w-[28px] h-[28px] rounded-full ${
            activeSection === "Personal"
              ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
              : "bg-[var(--secondary-color)]"
          }`}
        ></div>
        <p
          className={`text-xs font-medium ${
            activeSection === "Personal"
              ? "text-[var(--primary-color)]"
              : "secondary-color"
          }`}
        >
          Personal Data
        </p>
      </div>
      <img src={dotLine} alt="line" className="pb-6" />
      <div className="flex flex-col gap-2 items-center">
        <div
          className={`w-[28px] h-[28px] rounded-full ${
            activeSection === "Image"
              ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
              : "bg-[var(--secondary-color)]"
          }`}
        ></div>
        <p
          className={`text-xs font-medium ${
            activeSection === "Image"
              ? "text-[var(--primary-color)]"
              : "secondary-color"
          }`}
        >
          Image
        </p>
      </div>
      <img src={dotLine} alt="line" className="pb-6" />
      <div className="flex flex-col gap-2 items-center">
        <div
          className={`w-[28px] h-[28px] rounded-full ${
            activeSection === "Preview"
              ? "bg-[var(--primary-color)] outline outline-1 outline-[var(--primary-color)] border border-white]"
              : "bg-[var(--secondary-color)]"
          }`}
        ></div>
        <p
          className={`text-xs font-medium ${
            activeSection === "Preview"
              ? "text-[var(--primary-color)]"
              : "secondary-color"
          }`}
        >
          Preview
        </p>
      </div>
    </div>
  );
}
