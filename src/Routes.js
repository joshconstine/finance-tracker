import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";

const Routes = () => {
  const currentUser = false;

  return (
    <div>
      <Router>
        {currentUser ? (
          <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" component={SignUp} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default Routes;
