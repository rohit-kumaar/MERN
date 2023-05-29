import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API = `http://localhost:8080/api`;

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const response = await fetch(API, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  const getUsers = async () => {
    const response = await fetch(API, {
      method: "GET",
    });

    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleInput}
          />
        </div>

        <input type="submit" />
      </form>

      <div>
        <div>GET ALL USER DATA</div>

        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username}, {user.password}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
