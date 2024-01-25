import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../context/authContext";

export default function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuth();
  /*
  //Login değilken
  const auth ={}
  */

  /*
  //Login iken
  const auth ={
    "username":"workintech",
    "role":"admin"
    "token":"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  }
  */

  console.log("privateRoute", auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.username ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    ></Route>
  );
}
