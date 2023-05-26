import classes from "./ProfileForm.module.css";
import axios from "axios";
import { useContext, useRef } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const authCntxt = useContext(AuthContext);
  const passwordRef = useRef();
  const history = useHistory();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAfMEq7M-S7-Re5qq_JW-tytrkN81LhH_E",
        {
          idToken: authCntxt.token,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }
      );
      if(response){
        alert("Password changed successfully");
      };
      history.replace('/');

    } catch (err) {
      alert(err.response.data.error.message);
    }
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
