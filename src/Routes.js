import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";

const Routes = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <Router>
        {user ? (
          <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default Routes;
