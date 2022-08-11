import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";

const RoutersMain = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={<Login user={user} setUser={setUser} navigate={navigate} />}
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard user={user} setUser={setUser} navigate={navigate} />
        }
      />
      <Route path="/register" element={<Register navigate={navigate} />} />
    </Routes>
  );
};
export default RoutersMain;
