import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [usn, setUsn] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a request to the backend with the USN to get the token
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usn }), // Send the USN to the backend
      });

      // If the response is OK, extract the token
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save the token in localStorage
        navigate("/dashboard"); // Navigate to the dashboard
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed"); // Display error message from backend
      }
    } catch (error) {
      setError("Something went wrong. Please try again later."); // Handle network or other errors
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      
      {/* Display error message if there is one */}
      {error && <div className="alert alert-danger">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">USN</label>
          <input
            type="text"
            className="form-control"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
