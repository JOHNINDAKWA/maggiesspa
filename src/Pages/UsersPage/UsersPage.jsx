import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsersPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const BIN_ID = "68139f1b8561e97a500b9e03";
const MASTER_KEY = "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": MASTER_KEY },
      });
      setUsers(response.data.record.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      active: user.active,
    });
    setShowPassword(false);
  };

  const openAddModal = () => {
    setIsAdding(true);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "staff",
    });
    setShowPassword(false);
  };

  const closeModal = () => {
    setEditingUser(null);
    setIsAdding(false);
    setFormData({ name: "", email: "", password: "", role: "" });
  };

  const handleSave = async () => {
    try {
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": MASTER_KEY },
      });

      const currentData = response.data.record;
      let updatedUsers;

      if (isAdding) {
        const newUser = {
          id: Date.now(),
          ...formData,
          active: "true",
        };
        updatedUsers = [...currentData.users, newUser];
      } else {
        updatedUsers = currentData.users.map((u) =>
          u.id === editingUser.id ? { ...u, ...formData } : u
        );
      }

      const updatedBin = {
        ...currentData,
        users: updatedUsers,
      };

      await axios.put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        updatedBin,
        { headers: { "Content-Type": "application/json", "X-Master-Key": MASTER_KEY } }
      );

      setUsers(updatedUsers);
      closeModal();
      showToast(isAdding ? "User added successfully!" : "User updated successfully!");
    } catch (error) {
      console.error("Error saving user:", error);
      showToast("Failed to save user.");
    }
  };

  return (
    <div className="users-page-container">
      {/* Breadcrumb link */}
      <div className="breadcrumb2">
        <Link to="/appointments" className="breadcrumb-link2">
          ← Appointments
        </Link>
      </div>

      <div className="header">
        <h2>User Management</h2>
        <button className="add-btn" onClick={openAddModal}>
          + Add New User
        </button>
      </div>

      {loading ? (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th className="hide-on-small">Email</th>
                <th className="hide-on-small">Role</th>
                <th className="hide-on-small">Active</th>
                <th className="edit-table">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={u.id}>
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td className="hide-on-small">{u.email}</td>
                  <td className="hide-on-small">
                    <span className={`role-badge ${u.role}`}>
                      {u.role.toUpperCase()}
                    </span>
                  </td>
                  <td className="hide-on-small">
                    {u.active === "true" ? (
                      <span className="status-active">Active</span>
                    ) : (
                      <span className="status-inactive">Inactive</span>
                    )}
                  </td>
                  <td className="edit-table">
                    <button className="edit-btn" onClick={() => openEditModal(u)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(editingUser || isAdding) && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{isAdding ? "Add New User" : `Edit User: ${editingUser.name}`}</h3>

            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>

            <label>
              Password:
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <span
                  className="toggle-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>

            <label>
              Role:
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
              </select>
            </label>

            {/* Only show Active in edit mode */}
            {!isAdding && (
              <label>
                Active:
                <select
                  value={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.value })}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </label>
            )}

            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>
                {isAdding ? "Add User" : "Save Changes"}
              </button>
              <button className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toastMessage && (
        <div className="custom-toast2">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
