import React, { useState, useContext, useEffect } from "react";
import "../styles/screenStyle/LoginScreen.css";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/NavigationButton/NavigationButton";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from "../constants/staticTextKeyConstant";
import { useNavigate } from "react-router-dom";
function LoginScreen() {
  const Navigate = useNavigate();
  const { isAuth, onClickLogin } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
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
  const onPressLogin = async (event) => {
    setIsLoading(true);
    await onClickLogin(event, userData.email, userData.password);
    setIsLoading(false);
  };
  useEffect(() => {
    if (isAuth) {
      Navigate("/home");
    }
  }, [isAuth]);
  return (
    <>
      <div className="loginContainer">
        <h1>Log In</h1>
        <form className="textInputContiner">
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
        </form>
        <div className="buttonsContainer">
          <Button
            placeHolder="Log In"
            className={"btn-submit"}
            onPress={onPressLogin}
          />
          <Button
            placeHolder="Clear"
            onPress={onClearData}
            className={"btn-submit"}
          />
        </div>
        <button className="touchable-button">Forgot Password?</button>
      </div>
    </>
  );
}

export default LoginScreen;
