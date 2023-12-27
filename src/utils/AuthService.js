import React from "react";
import { onPressSignIn, onCheckUser } from "../constants/APIconstants";
const KEY = "TOKENS";

//login
export const Login = (username, password) => {
  return fetch(onPressSignIn(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then(function (data) {
      return data.json();
    })
    .then((data) => {
      console.log("returned");
      saveTokens(data.accessToken);
      return data;
    })

    .catch(function (errorResponse) {
      console.log("error");
      throw errorResponse;
    });
};

//save accesstoken
const saveTokens = (ACCESS_TOKEN) => {
  localStorage.setItem(KEY, ACCESS_TOKEN);
};

//get token from local storage
const getToken = () => {
  const accessToken = localStorage.getItem(KEY);
  return accessToken;
};

//remove the token eg - when you logoff
export const removeToken = () => {
  localStorage.removeItem(KEY);
};

//check if the user has logged in
export function onCheckAfterLogin() {
  return fetch(onCheckUser, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => {
      console.log("this is repose");
      console.log(response.status);
    })
    .catch(() => {
      console.log("error");
    });
}
