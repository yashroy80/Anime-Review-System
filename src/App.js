import { useState } from "react";
import "./App.css";
import HomePage from "./components/home-page/HomePage";
import LoginPage from "./components/login-page/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div className="App">
    {/* {isLoggedIn?<HomePage />: <LoginPage setIsLoggedIn={setIsLoggedIn}/> } */}
    <HomePage />
  </div>;
}

export default App;
