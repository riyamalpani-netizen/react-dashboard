import { useState, useEffect } from "react";
import Button from "./Button";
import InputField from "./InputField";

function UserTable({ users, theme, onAddUser, onDeleteUser }) {
  const isDark = theme === "dark";
  //  the below is looking wether the add use modal is visibble
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Stores the form input values for the new user.
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Close the modal and reset the form when the modal is closed.
  useEffect(() => {
    if (!isModalOpen) {
      resetForm();
    }
  }, [isModalOpen]);

  const themeClass = isDark ? "dark" : "light";

  // Clears the form after a user is added or cancelled.
  const resetForm = () => {
    setFormData({ name: "", email: "" });
  };

  // it is sending the entered name and email to the parent component and then closes the modal.
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData.name, formData.email);
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <div className={`user-table ${themeClass}`}>
      <div className="user-table-header">
        <h2 className="user-table-title">Users</h2>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Add User
        </Button>
      </div>

      {/* Show the modal only when the user clicks Add User. */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <h3 className="modal-title">Add New User</h3>
            <form onSubmit={handleSubmit} className="modal-form">
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
              <div className="modal-actions">
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
      <table className="user-table-table">
        <thead>
          <tr>
            <th className="user-table-heading">ID</th>
            <th className="user-table-heading">Name</th>
            <th className="user-table-heading">Email</th>
            <th className="user-table-heading">Action</th>
          </tr>
        </thead>

        <tbody>
          {/* Display each user row and give each one a serial number. */}
          {users.map((user, index) => (
            <tr key={user.id} className="user-table-row">
              <td className="user-table-cell">{index + 1}</td>
              <td className="user-table-cell">{user.name}</td>
              <td className="user-table-cell">{user.email}</td>
              <td className="user-table-cell">
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