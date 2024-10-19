import { useEffect, useState } from "react";
import Navbar from "../components/SharedComponents/Navbar/Navbar";
import Sidebar from "../components/SharedComponents/Sidebar/Sidebar";
import MainRoutes from "../routes/MainRoutes";
import OfflinePage from "../pages/OfflinePage/OfflinePage";

export default function MainLayout() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  /* monitoring changes in the online status of the browser, 
  so When the online status changes, updates the state to reflect the current online status.
 */
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine); // Update state with current online status
    };
    // Event listeners for the 'online' and 'offline' events to detect changes in connectivity.
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);
    // Removes event listeners when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return (
    <div className="container mx-auto flex">
      <Sidebar />
      {isOnline ? (
        <div className="w-[calc(100%-250px)] layout">
          <Navbar />
          <MainRoutes />
        </div>
      ) : (
        <OfflinePage />
      )}
    </div>
  );
}
