import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const gradientTextStyle: React.CSSProperties & {
    WebkitBackgroundClip?: string;
    WebkitTextFillColor?: string;
  } = {
    backgroundImage:
      "linear-gradient(to right, #e6d802, #19c051,#485061,#63cdf6,#f24b03,#494547,#da3fa6,#40275a,#681e26)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  };
  const LoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Login successful:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
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
          flexDirection: "column",
          height: "90vh",
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
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "-20px",
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
              required
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
              required
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
                cursor: "pointer",
              }}
              type="submit"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
          <p style={{ position: "absolute", bottom: "0" }}>
            Don't have an account?{" "}
            <a style={gradientTextStyle} href="/register">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
