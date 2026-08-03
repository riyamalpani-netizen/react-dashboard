import { useNavigate, Link } from "react-router-dom";  //used to navigate to the login page after logout

function Navbar({ theme, onToggleTheme }) {
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className={`flex justify-between items-center p-4 shadow ${isDark ? "bg-slate-900 text-slate-100" : "bg-blue-600 text-white"}`}>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="flex items-center gap-3">
        <button
          className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
          onClick={onToggleTheme}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

        <button
           className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
           onClick={handleLogout}    //navigates to the login page after logout
         >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;