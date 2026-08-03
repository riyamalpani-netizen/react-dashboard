function UserTable({ users, theme }) { 
  const isDark = theme === "dark";
  return (
    <div className={`rounded-lg shadow p-5 ${isDark ? "bg-slate-900 text-slate-100 shadow-slate-800" : "bg-white text-slate-900"}`}>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <table className="w-full border border-slate-700">
        <thead>
          <tr className={isDark ? "bg-slate-800" : "bg-gray-200"}>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={isDark ? "even:bg-slate-800 odd:bg-slate-900" : "even:bg-gray-50 odd:bg-white"}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;