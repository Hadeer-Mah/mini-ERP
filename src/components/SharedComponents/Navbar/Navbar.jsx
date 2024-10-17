import envelope from "../../../assets/svgs/navbar/envelope.svg";
import bell from "../../../assets/svgs/navbar/bell.svg";
import user from "../../../assets/svgs/navbar/user.svg";

export default function Navbar() {
  return (
    <div className="h=[90px] flex items-center w-full justify-end p-3 bg-white">
        <div className="flex gap-2 items-center">
            <div className="flex justify-center items-center bg-[var(--light-color)] cursor-pointer h-[48px] w-[48px] rounded-full relative">
                <img src={envelope} alt="messages" />
                <div className="absolute flex justify-center items-center rounded-full bg-[var(--primary-color)] top-0 end-0 w-[16px] h-[16px] text-[10px] text-white font-semibold">3+</div>
            </div>
            <div className="flex justify-center items-center bg-[var(--light-color)] cursor-pointer h-[48px] w-[48px] rounded-full relative">
                <img src={bell} alt="notifications" />
                <div className="absolute flex justify-center items-center rounded-full bg-[var(--primary-color)] top-0 end-0 w-[16px] h-[16px] text-[10px] text-white font-semibold">8+</div>
            </div>
            <div className="flex gap-1 items-center">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img src={user} alt="user" className="w-full h-full object-contain"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#323232] font-bold">Mohamed Kamal</p>
                    <p className="text-[#737791] text=[10.5px]">Admin</p>
                </div>
            </div>
        </div>
    </div>
  )
}
