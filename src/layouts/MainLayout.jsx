import Navbar from "../components/SharedComponents/Navbar/Navbar";
import Sidebar from "../components/SharedComponents/Sidebar/Sidebar";
import MainRoutes from "../routes/MainRoutes";

export default function MainLayout() {
  return (
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-1">
        <Sidebar/>
        <div className="col-span-3">
            <Navbar/>
            <MainRoutes/>
        </div>
    </div>
  )
}
