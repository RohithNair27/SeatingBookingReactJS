const baseUrl = "http://localhost:8080/api/";

export const onPressSignIn = () => {
  return `${baseUrl}auth/signin`;
};

export const onCheckUser = () => {
  return `${baseUrl}test/user`;
};
