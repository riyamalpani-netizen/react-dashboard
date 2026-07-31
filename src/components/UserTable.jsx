function UserTable() {
  const users = [
    { id: 1, name: "Riya", email: "riya@gmail.com" },
    { id: 2, name: "Shruti", email: "shruti@gmail.com" },
    { id: 3, name: "Aditya", email: "aditya@gmail.com" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
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