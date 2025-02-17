import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function AppLayout() {
  return (
    <div className="md:grid xl:grid-cols-6 md:grid-cols-10 block h-screen md:overflow-y-hidden overflow-y-auto bg-black">
      <Sidebar />
      <main className="xl:col-span-5 md:col-span-9 col-span-1 overflow-y-auto sm:py-10 sm:px-10 py-5 px-5 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
