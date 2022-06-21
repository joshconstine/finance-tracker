import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Forms.css";

/**
 * COMPONENT
 */
const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");
  //   const { signup, writeUserData } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      //   signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
      <h3>SignUp</h3>
      <div className="formContainer">
        <form id="email">
          <label>Email</label>
          <input type="email" ref={emailRef} required />
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
          <label>Password Confirmation</label>
          <input type="password" ref={passwordConfirmRef} required />
        </form>
        <button onClick={(e) => handleSubmit(e)}>Sign In</button>
        <Link to="/login" variant="body2">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
