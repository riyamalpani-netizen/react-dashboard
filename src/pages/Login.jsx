
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";  //used to store and update the email and the password.
const handleLogin = () => {
  navigate("/dashboard");
};
function Login() {
    const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const handleLogin = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />
        {error && (
  <p className="text-red-500 mb-3">
    {error}
  </p>
)}

        <button
  onClick={handleLogin}
  className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
>
  Login
</button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">   
          sign up
  </Link>
        </p>
        
      </div>
    </div>
  );
}

export default Login;