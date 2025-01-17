import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <section className="md:flex min-h-screen bg-white/20 relative">
      {/* Left Side: Sidebar Component */}
      <div>
        <Sidebar />
      </div>
      {/* Right Side: Dashboard Dynamic Content */}
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
