import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

// 👉 update this import to your actual logo path
import logo from "../../assets/images/maggies_white _logo.png";

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

      const users = response.data.record.users || [];
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        if (user.active === "false") {
          setError("Your account is inactive. Please contact the administrator.");
          return;
        }

        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          active: user.active,
        };

        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        navigate("/dashboard/appointments");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        {/* Left: Sign In */}
        <form className="auth-left" onSubmit={handleLogin}>
          <h1 className="auth-title">Sign In</h1>

          {error && <div className="auth-error">{error}</div>}

          <label className="auth-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="auth-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <label className="auth-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="auth-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <div className="auth-actions">
            <button type="submit" className="auth-primary">Sign In</button>
          </div>
        </form>

        {/* Right: Brand / Welcome */}
        <aside className="auth-right">
          <img src={logo} alt="Brand logo" className="auth-logo" />
          <h2 className="auth-hello">Maggies Pregnancy & Postpartum Spa</h2>
          <p className="auth-copy">
            Login with your email and password to access the admin panel.
          </p>
    
        </aside>
      </div>
    </div>
  );
};

export default LoginPage;
