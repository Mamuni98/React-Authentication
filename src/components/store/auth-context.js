import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  IsLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
});
export const AuthConTextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const updateLoggedIn = !!token;
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 1000*60*5);
  });

  const logInHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  const contextValue = {
    token: token,
    IsLoggedIn: updateLoggedIn,
    logIn: logInHandler,
    logOut: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
