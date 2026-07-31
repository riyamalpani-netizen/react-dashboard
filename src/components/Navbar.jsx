import { useNavigate, Link } from "react-router-dom";  //used to navigate to the login page after logout

function Navbar() {
    const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="bg-blue-600 text-white flex justify-between items-center p-4 shadow">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <button 
         className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
         onClick={handleLogout}    //navigates to the login page after logout
         >
        Logout
      </button>
    </div>
  );
}

export default Navbar;