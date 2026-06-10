import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const handleOnUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handleOnPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const onLoginClick = () => {
    if (username === "user" && password === "1234") {
      console.log("login complete");
      navigate("/dashboard")
    } else {
      setLoginErrorMsg("Error: user and password not match.");
    }
  };

  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  return (
    <>
      <h1 className="text-white">Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={handleOnUsernameChange}
        className="bg-gray-700 block"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleOnPasswordChange}
        className="bg-gray-700 block"
      />
      <button className="bg-gray-700" onClick={onLoginClick}>
        Login
      </button>
      <p className="text-red-500">{loginErrorMsg}</p>
    </>
  );
}
