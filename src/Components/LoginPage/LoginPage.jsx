import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const BIN_ID = "68139f1b8561e97a500b9e03";
const MASTER_KEY = "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": MASTER_KEY },
      });
  
      const users = response.data.record.users;
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
  
      if (user) {
        if (user.active === "false") {
          setError("Your account is inactive. Please contact the administrator.");
          return;
        }
  
        // ✅ user role and active directly from bin!
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          active: user.active,
        };
  
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        navigate("/appointments");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
