import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCntxt = useContext(AuthContext);
  const IsLoggedIn = authCntxt.IsLoggedIn;

  const logOutPageHandler = () => {
    authCntxt.logOut();
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!IsLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {IsLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {IsLoggedIn && (
            <li>
              <button onClick={logOutPageHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
