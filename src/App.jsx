
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; //dependencies for routing in react. BrowserRouter is used to wrap the entire application and provide routing functionality. Routes is used to define the different routes in the application. Route is used to define a specific route and its corresponding component. Navigate is used to redirect the user to a different route.

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;