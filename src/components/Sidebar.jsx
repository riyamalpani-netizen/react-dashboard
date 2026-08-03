function Sidebar({ theme }) {
  const isDark = theme === "dark";
  return (
    <div className={`w-60 min-h-screen p-5 ${isDark ? "bg-slate-900 text-slate-100" : "bg-gray-800 text-white"}`}>
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      <ul className="space-y-4">
        <li className="hover:text-yellow-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-yellow-400 cursor-pointer">
          Users
        </li>

        <li className="hover:text-yellow-400 cursor-pointer">
          Orders
        </li>

        <li className="hover:text-yellow-400 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;