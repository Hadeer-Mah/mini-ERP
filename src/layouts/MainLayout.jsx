import Navbar from "../components/SharedComponents/Navbar/Navbar";
import Sidebar from "../components/SharedComponents/Sidebar/Sidebar";
import MainRoutes from "../routes/MainRoutes";

export default function MainLayout() {
  return (
    <div className="container mx-auto flex">
        <Sidebar/>
        <div className="w-[calc(100%-250px)] layout">
            <Navbar/>
            <MainRoutes/>
        </div>
    </div>
  )
}
