import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginUser = async (e: any) => {
    e.preventDefault(); // Prevent the default form behavior

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data); // Log the response data
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#e0e5ec",
          borderRadius: "12px",
          padding: "15px 20px",
          width: "450px",
          height: "350px",
          fontSize: "16px",
          color: "#333",
          border: "none",
          outline: "none",
          boxShadow:
            "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h1>Welcome Back!</h1>
        <form
          onSubmit={LoginUser}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "50px",
              background: "#fff",
              color: "#333",
              border: "none",
              outline: "none",
              boxShadow:
                " inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff",
              paddingLeft: "10px",
              marginTop: "20px",
            }}
            type="email"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "50px",
              background: "#fff",
              color: "#333",
              border: "none",
              outline: "none",
              boxShadow:
                " inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff",
              paddingLeft: "10px",
              marginTop: "20px",
            }}
            type="password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{
              width: "100px",
              height: "30px",
              borderRadius: "2px",
              background: "#333",
              color: "#fff",
              border: "none",
              outline: "none",
              boxShadow:
                "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
              marginTop: "20px",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

