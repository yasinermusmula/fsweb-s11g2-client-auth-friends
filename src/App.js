import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friend from "./components/Friend";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Switch>
          <PrivateRoute path="/friends/add/">
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path="/friends/:friendID/">
            <Friend />
          </PrivateRoute>
          <PrivateRoute path="/friends/">
            <FriendList />
          </PrivateRoute>
          <Route path="/logout">
            <div>Logout</div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
