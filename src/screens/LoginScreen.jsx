import React, { useState } from "react";
import "../styles/screenStyle/LoginScreen.css";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/NavigationButton/NavigationButton";
import { Link } from "react-router-dom";
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from "../constants/staticTextKeyConstant";
function LoginScreen() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onTypeUserData = (event) => {
    const { value, type } = event.target;

    if (event.target.type === "email") {
      setUserData({ ...userData, email: value });
    } else {
      setUserData({ ...userData, password: value });
    }

    console.log(userData);
  };

  const onClearData = () => {
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="loginContainer">
        <h1>Log In</h1>
        <div className="textInputContiner">
          <TextInput
            value={userData.email}
            placeholder={EMAIL_PLACEHOLDER}
            type="email"
            onType={onTypeUserData}
          />
          <TextInput
            value={userData.password}
            placeholder={PASSWORD_PLACEHOLDER}
            type="password"
            onType={onTypeUserData}
          />
        </div>
        <div className="buttonsContainer">
          <Button
            placeHolder="Log In"
            isNavigate={true}
            className={"btn-submit"}
          />
          <Button
            placeHolder="Clear"
            isNavigate={false}
            onPress={onClearData}
            className={"btn-submit"}
          />
        </div>
        <Link className="touchable-button">Forgot Password?</Link>
      </div>
    </>
  );
}

export default LoginScreen;
