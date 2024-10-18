import search from "../../../assets/svgs/search.svg"
export default function Searchbar({state, setState, placeholder}) {
  return (
    <div className="border border-[#E2E2E2] pl-14 pr-4 py-2 rounded-[50px] relative w-full">
      <img src={search} alt="search" className="absolute left-6 w-[24px]"/>
      <input
        type="search"
        className="w-full text-sm"
        placeholder={placeholder}
        value={state}
        onChange={(e)=>{
          setState(e.target.value)
        }}
      />
    </div>
  )
}
