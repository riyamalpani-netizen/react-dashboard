import { useNavigate, Link } from "react-router-dom";  //used to navigate to the login page after logout
import { FaSun,FaMoon } from "react-icons/fa";

function Navbar({ theme, onToggleTheme }) {
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <h1 className="navbar-title">Admin Dashboard</h1>

      <div className="navbar-actions">
        <button
          className="navbar-button navbar-theme-button"
          onClick={onToggleTheme}
        >
           {theme === "light" ? (
            <FaSun className="navbar-icon" />
          ) : (
            <FaMoon className="navbar-icon" />
          )}
        </button>

        <button
           className="navbar-button navbar-logout-button"
           onClick={handleLogout}    //navigates to the login page after logout
         >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;