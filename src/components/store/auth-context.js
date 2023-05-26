import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  IsLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
});
export const AuthConTextProvider = (props) => {
  const [token, setToken] = useState("");
  const updateLoggedIn = !!token;

  const logInHandler = (token) => {
    setToken(token);
  };

  const logOutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    token: token,
    IsLoggedIn: updateLoggedIn,
    logIn: logInHandler,
    logOut: logOutHandler,
  };

  return <AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>;
};
export default AuthContext;
