import React from "react";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {}
  };
  return (
    <>
      <Navbar />
      <div className="mt-16">
        Hi this is Your Dashboard => {currentUser.email}
      </div>
      <button onClick={handleLogout} className="link-primary">
        Logout
      </button>

      <h6
        className="link-primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </h6>
    </>
  );
};

export default Dashboard;
