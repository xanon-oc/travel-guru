import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const LoginSignUp = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default LoginSignUp;
