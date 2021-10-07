import React, { useState } from "react";
import { StyledHeading, StyledSignUpPage } from "./SignUpPage.style";

function SignUpPage(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const loginHandler = () => {
    let userList = [];
    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      alert("Invalid Email!");
      return;
    }
    if (!password || password.length < 8) {
      alert("Password has less than 8 characters!");
      return;
    }
    const userData = JSON.parse(localStorage.getItem("userList"));
    if (userData) {
      userList = [...userData];
    }
    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Password and Confirm Password fields do not match!");
      } else {
        const flag = userList.filter((item) => {
          return item.email === email;
        });
        if (!flag.length) {
          userList.push({ email: email, password: password, data: {} });
          localStorage.setItem("userList", JSON.stringify(userList));
          props.setIsSignUp(false);
        } else {
          alert("User Already Exists!");
        }
      }
    }
  };
  return (
    <StyledSignUpPage>
      <StyledHeading>
        <h1>Anime Review System</h1>
      </StyledHeading>
      <div className="login-form">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={loginHandler}
          type="submit"
          className="btn btn-primary"
        >
          SignUp
        </button>
        <button
          onClick={() => {
            props.setIsSignUp(false);
          }}
          type="submit"
          className="btn btn-secondary login-btn"
        >
          Back to Login
        </button>
      </div>
    </StyledSignUpPage>
  );
}

export default SignUpPage;
