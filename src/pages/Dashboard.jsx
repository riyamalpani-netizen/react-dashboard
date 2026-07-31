import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import UserTable from "../components/UserTable";
function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <DashboardCards />
          <UserTable />
        </div>
      </div>
    </>
  );
}

export default Dashboard;