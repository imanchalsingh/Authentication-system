import React from "react";
import ColorPencil from "./pencils.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const gradientTextStyle: React.CSSProperties & {
    WebkitBackgroundClip?: string;
    WebkitTextFillColor?: string;
  } = {
    backgroundImage:
      "linear-gradient(to right, #e6d802, #19c051,#485061,#63cdf6,#f24b03,#494547,#da3fa6,#40275a,#681e26)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "60px",
    fontWeight: "bold",
    textAlign: "center",
  };
  const handleLogout = () => {
    // Clear auth token or user data from storage
    localStorage.removeItem("authToken"); // Example: Clear token from localStorage
    navigate("/login"); // Redirect to the login page
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #e6d802, #19c051,#485061,#63cdf6,#f24b03,#494547,#da3fa6,#40275a,#681e26)",
          width: "100%",
          height: "10px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div style={{ width: "40%" }}>
          <img
            style={{
              width: "400px",
              height: "500px",
              marginTop: "8%",
              position: "absolute",
              left: "0",
              top: "0",
              marginLeft: "10%",
            }}
            src={ColorPencil}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Added this to center everything
            width: "700px",
            textAlign: "center",
            marginTop: "10%",
            fontFamily: "Spicy Rice",
          }}
        >
          <h1 style={gradientTextStyle}>Auth Dashboard</h1>
          <p>
            A dashboard is a personalized interface displaying user-specific
            data like profile info, activities, and key actions. For your
            project, make it secure, responsive, and visually appealing,
            accessible only to logged-in users.
          </p>
          <button
            onClick={handleLogout}
            style={{
              backgroundImage:
                "linear-gradient(to right, #e6d802, #19c051, #485061,#da3fa6)",
              width: "130px",
              height: "30px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              margin: "20px",
              fontFamily: "Spicy Rice",
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
