import { Link, useNavigate } from "react-router-dom";
const handleSignup = () => {
  navigate("/login");
};
function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-6"
        />

        {/* <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Sign Up
        </button> */}
        <button
  onClick={handleSignup}
  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
>
  Sign Up
</button>

        <p className="text-center mt-4">
          Already have an account?
          {/* <span className="text-blue-600 cursor-pointer ml-1">
            Login
          </span> */}
           <Link to="/login" className="text-blue-600">
    Login
  </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;