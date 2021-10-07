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

export const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px;
  color: #fff;
  height: 100px;
  background-image: url("https://image.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg");
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
