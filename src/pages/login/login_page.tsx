import React, { use } from "react";
import { useState } from "react";

export default function LoginPage() {
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
        className="bg-white block"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleOnPasswordChange}
        className="bg-white block"
      />
      <button className="bg-white" onClick={onLoginClick}>
        Login
      </button>
      <p className="text-red-500">{loginErrorMsg}</p>
    </>
  );
}
