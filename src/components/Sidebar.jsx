function Sidebar({ theme }) {
  const isDark = theme === "dark";
  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">Menu</h2>

      <ul className="sidebar-nav">
        <li className="sidebar-item">Dashboard</li>
        <li className="sidebar-item">Users</li>
        <li className="sidebar-item">Orders</li>
        <li className="sidebar-item">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;