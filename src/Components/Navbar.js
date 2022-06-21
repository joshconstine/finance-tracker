import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { logout, selectUser } from "../redux/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  async function handleLogout() {
    await dispatch(logout());
  }

  return (
    <div>
      <h1>Finance tracker</h1>
      <nav>
        {user ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>{/* The navbar will show these links before you log in */}</div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
