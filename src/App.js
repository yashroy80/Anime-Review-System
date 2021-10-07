import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/home-page/HomePage";
import LoginPage from "./components/login-page";
import SignUpPage from "./components/signup-page";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
  }, []);
  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage setIsLoggedIn={setIsLoggedIn} />
      ) : isSignUp ? (
        <SignUpPage setIsSignUp={setIsSignUp} />
      ) : (
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
      )}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
