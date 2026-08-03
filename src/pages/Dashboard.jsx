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
  const [search, setSearch] = useState(""); 
  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
); //added to filter the users.

 
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
          <input
           type="text"
           placeholder="Search User..."
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           className="w-full md:w-80 border rounded-lg p-3 mb-4"
           />
           <UserTable users={filteredUsers} />
          {/* <UserTable users={users} /> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;