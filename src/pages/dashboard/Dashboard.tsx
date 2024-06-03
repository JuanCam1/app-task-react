import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="pl-20 max-sm:pl-16 z-0">
        <Outlet />
      </div>
    </>
  );
};
