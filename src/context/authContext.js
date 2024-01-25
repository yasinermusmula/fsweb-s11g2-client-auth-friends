import { createContext, useContext, useState } from "react";
import axios from "axios";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const baseURL = "http://localhost:9000/api/";

export default function AuthContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loginError, setLogginError] = useState(null);

  const axioWithAuthInstance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { Authorization: loggedInUser.token },
  });

  const loginUserAPI = (data) => {
    axios
      .post(`${baseURL}login`, data)
      .then(function (response) {
        console.log(response);
        setLoggedInUser(response.data);
        setLogginError(null);
      })
      .catch(function (error) {
        console.log(error);
        setLogginError(error.response.data.error);
      });
  };

  const isLoggedIn = loggedInUser.hasOwnProperty("token");
 
  const logout = () => {
    console.log("logout");
    setLoggedInUser({});
    axioWithAuthInstance
      .post("logout")
      .then(function (response) {
        console.log("logOut resolved", response);
      })
      .catch(function (error) {
        console.log("logOut error", error);
      });
  };

  return (
    <authContext.Provider
      value={{
        auth: loggedInUser,
        loginUserAPI,
        isLoggedIn,
        logout,
        loginError,
        axioWithAuthInstance,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
