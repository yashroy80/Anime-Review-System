import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 712px;
`;

export const StyledSeacrhBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 660px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid black;
  background-image: url("/images/powerful-characters.webp");
  min-width: 736px;

  .search-bar{
    width: 70%;
  }

  .search-btn {
    width: 150px;
    margin-top: 10px;
  }

  .dropdown-toggle {
    background-color: #007bff;
    color: #fff;
  }

  .logout-btn{
    position: fixed;
    right: 20px;
    top: 20px;
  }
`;
