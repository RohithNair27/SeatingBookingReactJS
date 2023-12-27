import React, { Children, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../../utils/AuthService";
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const onClickLogin = async (event, username, password) => {
    event.preventDefault();
    try {
      const login = await Login(username, password);
      console.log(login);
      if (login.refreshToken) {
        setIsAuth(true);
      } else {
        alert("wrong password");
      }
    } catch {
      console.log("erroer");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        onClickLogin,

        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
