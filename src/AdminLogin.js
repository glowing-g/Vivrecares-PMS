import React, { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // Simple password check for demo purposes
    if (password === "admin123") {
      onLogin();
    } else {
      alert("Incorrect password");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "40px auto" }}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 16 }}
      />
      <button type="submit" style={{ width: "100%", padding: 8 }}>Login</button>
    </form>
  );
}