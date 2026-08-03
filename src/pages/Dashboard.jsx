import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import UserTable from "../components/UserTable";
import { useState, useEffect } from "react";
function Dashboard() {
  const [cards, setCards] = useState([
    { title: "Total Users", value: 150 },
    { title: "Orders", value: 82 },
    { title: "Revenue", value: "₹1,25,000" },
    { title: "Pending", value: 15 },
  ]); //used react hooks below 

  const [users, setUsers] = useState([
    { id: 1, name: "Riya", email: "riya@gmail.com" },
    { id: 2, name: "Shruti", email: "shruti@gmail.com" },
    { id: 3, name: "Aditya", email: "aditya@gmail.com" },
  ]);

 
  useEffect(() => {
    console.log("Dashboard Loaded Successfully");
  }, []);
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <DashboardCards cards={cards} />
          <UserTable users={users} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;