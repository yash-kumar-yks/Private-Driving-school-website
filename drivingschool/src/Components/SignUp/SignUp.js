import React, { useState } from "react";
import "./SignUp.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from '../../store'
const SignUp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const authState = useSelector((state) => state.auth); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.text();
        if (!data) {
            dispatch(loginFailure('Invalid credentials, please try again.'));
          setMessage("Invalid Credentials");
          alert("Invalid credentials, please try again.");
          setPassword("");
        } 
        else if (data) {
          setMessage("");
          
          const obj = JSON.parse(data);
         dispatch(loginSuccess(obj));
          navigate("/");
        }
      } else {
        const error = await response.text();
        setMessage("Login Failed");
        dispatch(loginFailure(`Login failed`));
        alert(`Login failed`);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
