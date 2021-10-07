import React, { useEffect, useState } from "react";
import { StyledHeading, StyledLoginPage } from "./LoginPage.style";

function LoginPage(props) {
  const [userList, setUserList] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userList"));
    setUserList(data);
  }, []);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const loginHandler = () => {
    let flag = false;
    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      alert("Invalid Email!");
      return;
    }
    if (password.length < 8) {
      alert("Password has less than 8 characters!");
      return;
    }
    if (userList) {
      userList.forEach((item) => {
        if (item.email === email && item.password === password) {
          flag = true;
        }
      });
    }
    if (flag) {
      localStorage.setItem("activeUser", JSON.stringify(email));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      props.setIsLoggedIn(true);
    } else {
      alert("Incorrect Email or Password");
    }
  };

  const signupHandler = () => {
    props.setIsSignUp(true);
  };
  return (
    <StyledLoginPage>
      <StyledHeading><h1>Anime Review System</h1></StyledHeading>
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
        <button
          onClick={loginHandler}
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
        <button
          onClick={signupHandler}
          type="submit"
          className="btn btn-secondary sign-up"
        >
          SignUp
        </button>
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;
