import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-64px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
