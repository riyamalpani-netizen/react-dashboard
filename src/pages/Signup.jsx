import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";  //it is used to store and update the email and the password.

function Signup() {
  const navigate = useNavigate(); //used to navigate to the login page after signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {  //runs when the signup button is clicked
    navigate("/login"); //navigates to the login page after signup
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-6"
        />
        <button
  onClick={handleSignup}
  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
>
  Sign Up
</button>

        <p className="text-center mt-4">
          Already have an account?
           <Link to="/login" className="text-blue-600">
    Login
  </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;