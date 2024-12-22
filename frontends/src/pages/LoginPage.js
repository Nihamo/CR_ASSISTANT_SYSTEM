import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [usn, setUsn] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API request for login (you can replace this with an actual API call)
    if (usn && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
