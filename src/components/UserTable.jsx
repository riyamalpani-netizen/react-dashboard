import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

function UserTable({ users, theme, onAddUser, onDeleteUser }) {
  // Check whether the current theme is dark so the component can switch styles.
  const isDark = theme === "dark";
  // Controls whether the add-user modal is visible.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Stores the form input values for the new user.
  const [formData, setFormData] = useState({ name: "", email: "" });
  // Applies a theme class so global CSS can style light and dark modes separately.
  const themeClass = isDark ? "dark" : "light";

  // Clears the form after a user is added or cancelled.
  const resetForm = () => {
    setFormData({ name: "", email: "" });
  };

  // Sends the entered name and email to the parent component and closes the modal.
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData.name, formData.email);
    resetForm();
    setIsModalOpen(false);
  };

  return (
    // Main card container for the user list and its actions.
    <div className={`user-table ${themeClass}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
          Users
        </h2>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Add User
        </Button>
      </div>

      {/* Show the modal only when the user clicks Add User. */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-slate-900 shadow-xl dark:bg-slate-900 dark:text-slate-100">
            <h3 className="mb-4 text-lg font-semibold">Add New User</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                id="name"
                label="Name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="flex justify-end gap-3">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    resetForm();
                    setIsModalOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Render the list of users in a table layout. */}
      <table className={`w-full border ${isDark ? "border-slate-600" : "border-slate-300"} text-left ${isDark ? "text-slate-100" : "text-slate-900"}`}>
        <thead>
          <tr className={isDark ? "bg-slate-800 text-slate-100" : "bg-gray-200 text-slate-900"}>
            <th className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>ID</th>
            <th className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>Name</th>
            <th className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>Email</th>
            <th className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* Display each user row and give each one a serial number. */}
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"}
            >
              <td className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>{index + 1}</td>
              <td className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>{user.name}</td>
              <td className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>{user.email}</td>
              <td className={`border ${isDark ? "border-slate-600" : "border-slate-300"} p-2`}>
                <Button variant="danger" onClick={() => onDeleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;