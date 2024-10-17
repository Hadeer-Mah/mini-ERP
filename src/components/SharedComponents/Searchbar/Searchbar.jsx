import search from "../../../assets/svgs/search.svg"
export default function Searchbar() {
  return (
    <div className="border border-[#E2E2E2] pl-14 pr-4 py-2 rounded-[50px] relative w-full">
      <img src={search} alt="search" className="absolute left-6"/>
      <input
        type="search"
      />
    </div>
  )
}
