import { useState } from "react";

function UserTable({ users, theme, onAddUser, onDeleteUser }) {
  const isDark = theme === "dark";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const themeClass = isDark ? "dark" : "light";

  const resetForm = () => {
    setFormData({ name: "", email: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData.name, formData.email);
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <div className={`user-table ${themeClass}`}>
      <div className="user-table__header">
        <h2 className="user-table__title">Users</h2>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="user-table__button user-table__button--primary"
        >
          Add User
        </button>
      </div>

      {isModalOpen && (
        <div className="user-table__modal-backdrop">
          <div className="user-table__modal">
            <h3 className="mb-4 text-lg font-semibold">Add New User</h3>
            <form onSubmit={handleSubmit} className="user-table__form">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="user-table__input"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="user-table__input"
              />
              <div className="user-table__actions">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setIsModalOpen(false);
                  }}
                  className="user-table__button user-table__button--secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="user-table__button user-table__button--primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="user-table__table">
        <thead>
          <tr className="user-table__thead-row">
            <th className="user-table__cell">ID</th>
            <th className="user-table__cell">Name</th>
            <th className="user-table__cell">Email</th>
            <th className="user-table__cell">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="user-table__row">
              <td className="user-table__cell">{index + 1}</td>
              <td className="user-table__cell">{user.name}</td>
              <td className="user-table__cell">{user.email}</td>
              <td className="user-table__cell">
                <button
                  type="button"
                  onClick={() => onDeleteUser(user.id)}
                  className="user-table__button user-table__button--danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;