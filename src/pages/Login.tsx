import React, { useState } from "react";
import "../Login.css";
import { loginData } from "../API/UserApi";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userDetails, setUserDetails] = useState( {
    userName : '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const handleSubmit = async () => {
    try {
      const { userName, email, password } = userDetails;
      const userData = {
        username: userName,
        email: email,
        password: password,
      };
      const responseData = await loginData(userData);
      alert(JSON.stringify(responseData));
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <div className={'container right-panel-active'}>
      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form  onSubmit={(e) => e.preventDefault()}>
          <h1 className="d-flex justify-content-center">Sign In</h1>
         <input
            type="text"
            name="userName"
            placeholder="Name"
            className="mb-3"
            value={userDetails.userName}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Please login with your info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey</p>
            {/* <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
