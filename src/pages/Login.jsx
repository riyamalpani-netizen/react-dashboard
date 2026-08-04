
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";  //used to store and update the email and the password.

function Login() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Set document title when the login page mounts.
  useEffect(() => {
    document.title = "Login | React Dashboard";
  }, []);

  // Clear error state when the user updates the form inputs.
  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [email, password]);

  const handleLogin = () => {
  console.log("abcd")
  if (
    email === "admin@gmail.com" &&
    password === "admin123"
  ) {
    navigate("/dashboard");
  } else {
    setError("Invalid Email or Password");
  }
};
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-heading">Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        {error && (
  <p className="auth-error">
    {error}
  </p>
)}

        <button
          onClick={handleLogin}
          className="btn btn-primary btn-full"
        >
          Login
        </button>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;