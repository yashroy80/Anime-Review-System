import styled from "styled-components";

export const StyledSignUpPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://wallpapermoon.com/wp-content/uploads/2021/07/00090050.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .login-form {
    text-align: left;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid black;
    background: #fff;
  }

  .login-btn {
    margin-left: 5px;
  }
`;

export const StyledHeading = styled.h1`
  position: absolute;
  top: 200px;
  color: #fff;
`;
