import { useState, useEffect } from "react";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p className="status-text">Loading users...</p>;
  if (error) return <p className="form-error">{error}</p>;

  return (
    <div className="user-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>🏢 {user.company.name}</p>
          <p>📍 {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;