import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassord, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // use firebase-hook to create user bu email & password:
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  // call seNavigate Hook from router to redirect user:
  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  //   if user get then navigate user to home;
  if (user) {
    navigate("/shop");
  }
  //  handle for submmit form by creating new user.
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassord) {
      setError("Confirm Password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be six character");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
