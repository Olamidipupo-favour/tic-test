import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function AdminAppLayout() {
  return (
    <div className="grid grid-cols-6 h-screen overflow-y-hidden bg-black">
      <Sidebar isAdmin/>
      <main className="col-span-5 overflow-y-auto p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminAppLayout;
