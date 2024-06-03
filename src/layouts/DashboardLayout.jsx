import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="relative min-h-screen lg:flex">
      <Sidebar />

      <div className="flex-1 lg:ml-64 bg-primaryBg dark:bg-darkPrimaryBg min-h-screen">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
