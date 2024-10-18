
export default function MainButton({ btnTitle, secondaryBtn = false, onClickFn = () => {}}) {
  return (
    <button className={`px-4 py-2 rounded-[50px] cursor-pointer min-w-28 ${secondaryBtn ? "border border-[var(--secondary-color)] text-[var(--secondary-color)]" : "bg-[var(--primary-color)] text-white"}`} onClick={()=>{onClickFn()}}>{btnTitle}</button>
  )
}
