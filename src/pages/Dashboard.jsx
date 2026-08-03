import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import UserTable from "../components/UserTable";
import { useState, useEffect } from "react";
function Dashboard() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    console.log("Dashboard Loaded Successfully");
  }, []);
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <div className={`flex min-h-screen ${isDark ? "bg-slate-950 text-slate-100" : "bg-gray-100 text-slate-900"}`}>
        <Sidebar theme={theme} />

        <div className="flex-1 p-6 min-h-screen">
          <DashboardCards cards={cards} theme={theme} />
          <input
           type="text"
           placeholder="Search User..."
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           className={`w-full md:w-80 border rounded-lg p-3 mb-4 transition ${isDark ? "bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-500" : "bg-white border-gray-300 text-slate-900 placeholder-gray-500"}`}
           />
           <UserTable users={filteredUsers} theme={theme} />
          {/* <UserTable users={users} /> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;