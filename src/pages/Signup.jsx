import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";  //it is used to store and update the email and the password.

function Signup() {
  const navigate = useNavigate(); //used to navigate to the login page after signup
  const [name, setName] = useState("");

  // Set document title when the signup page mounts.
  useEffect(() => {
    document.title = "Sign Up | React Dashboard";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {  //runs when the signup button is clicked
    navigate("/login"); //navigates to the login page after signup
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-heading">Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth-input"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="auth-input"
        />
        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="gender" value="Male" />
              Male
            </label>
            <label className="radio-label">
              <input type="radio" name="gender" value="Female" />
              Female
            </label>
            <label className="radio-label">
              <input type="radio" name="gender" value="Other" />
              Other
            </label>
          </div>
        </div>
        <select className="select-field">
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
        </select>
        <div className="form-group">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" />
            I accept the Terms & Conditions
          </label>
        </div>
        <button
          onClick={handleSignup}
          className="btn btn-success btn-full"
        >
          Sign Up
        </button>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;