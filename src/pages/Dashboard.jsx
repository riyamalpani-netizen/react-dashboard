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

  const addUser = (name, email) => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) return;

    const newUser = {
      id: Date.now(),
      name: trimmedName,
      email: trimmedEmail,
    };

    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Load saved theme from localStorage only once when the dashboard mounts.
  // This ensures the theme persists across browser refreshes.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Persist the current theme to localStorage and toggle the global dark class.
  // Runs whenever `theme` changes so UI and storage stay in sync.
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
  }, [theme, isDark]);

  // verifying the dashboard loaded.
  // Removed strick mode from index.js to avoid double console logs
  useEffect(() => {
    console.log("Dashboard Loaded Successfully");
  }, []);
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <div className="dashboard-shell">
        <Sidebar theme={theme} />

        <div className="dashboard-main-content">
          <DashboardCards cards={cards} theme={theme} />
          <div className="dashboard-toolbar mb-4">
            <div className="dashboard-toolbar-inner">
              <input
                type="text"
                placeholder="Search User..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dashboard-search-input"
              />
            </div>
          </div>
          <UserTable users={filteredUsers} theme={theme} onAddUser={addUser} onDeleteUser={deleteUser} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;