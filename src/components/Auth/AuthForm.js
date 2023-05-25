import { useState, useRef } from "react";
import axios from "axios";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const[isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      if (isLogin) {

      } 
      else {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfMEq7M-S7-Re5qq_JW-tytrkN81LhH_E",
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        );
        console.log(response);
      }
    } catch (err) {
      const alertmsg = err.response.data.error.message;
      alert(`${alertmsg}`);
    }
    setIsLoading(false);
    event.target.reset();
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading ? <button
            type="submit"
            className={classes.toggle}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button> : <p>loading...</p>}
          </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
