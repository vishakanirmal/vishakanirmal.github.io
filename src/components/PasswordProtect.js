import React, { useState, useEffect } from "react";
import '/src/styles/global.css';

const PasswordProtect = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "green"; // Set your password here

  useEffect(() => {
    // Check if the user is already authenticated by looking at localStorage
    const storedPassword = localStorage.getItem("authenticated");
    if (storedPassword === correctPassword) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      // Store the password in localStorage to remember the user is authenticated
      localStorage.setItem("authenticated", correctPassword);
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return isAuthenticated ? (
    children
  ) : (
    <div className="passwordpage">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="passwordinput"
        />
        <button type="submit">
          Submit →
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
