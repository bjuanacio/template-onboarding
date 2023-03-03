import { useState } from "react";
import { Button } from "./components/atoms/button/button";
import { Input } from "./components/atoms/input/input";
import { Typography } from "./components/atoms/typography/typography";
import "./app.scss";
import Login from "./components/molecules/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from "./components/molecules/register/register";

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Login></Login>
        {/* <RegisterForm></RegisterForm> */}
      </div>
    </div>
  );
}

export default App;
