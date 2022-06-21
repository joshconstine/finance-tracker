import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/userSlice";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "../firebase";

function Login() {
  // use state constants for the the form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };

  // A quick check on the name field to make it mandatory
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
          displayName: name,
        })
          .then(
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            )
          )
          .catch((error) => {
            console.log("user not updated");
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="loginForm">
      <form>
        <div className="login">
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name (required for registering)"
              type="text"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>
          <button type="submit" onClick={loginToApp}>
            Sign In
          </button>
        </div>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
