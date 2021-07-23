import React, { useState } from "react";
import { useHistory } from "react-router";
import { signUp } from "../../store/Auth/auth.actions";
import validate from "../../Util/validate";
import "./SignUp.css";

const SignUpPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    id: Math.random() * 1000 + Math.random() * 5000,
  });
  const history = useHistory();
  const [validateObj, setValidateObj] = useState({ isValid: true, errors: {} });

  const handleLogInChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setValidateObj(validate(e.target, e.target.name));
  };

  const onSignUpClick = () => {
    signUp(userData, history.push("/", userData));
  };

  const handleLogInBluer = (e) => {
    setValidateObj(validate(e.target, e.target.name));
  };
  return (
    <div className="wrapContainer">
      <div className="signUpContainer">
        <input
          className={
            validateObj.errors.name ? "inputSignUpError" : "inputSignUp"
          }
          onChange={handleLogInChange}
          onBlur={handleLogInBluer}
          placeholder="Name"
          type="text"
          name="name"
          autoComplete="none"
          value={userData.name}
        />
        <span className="errorMassage">{validateObj.errors.name}</span>
        <input
          className={
            validateObj.errors.lastName ? "inputSignUpError" : "inputSignUp"
          }
          onChange={handleLogInChange}
          onBlur={handleLogInBluer}
          placeholder="LastName"
          type="text"
          name="lastName"
          autoComplete="none"
          value={userData.lastName}
        />
        <span className="errorMassage">{validateObj.errors.lastName}</span>
        <input
          className={
            validateObj.errors.email ? "inputSignUpError" : "inputSignUp"
          }
          onChange={handleLogInChange}
          onBlur={handleLogInBluer}
          placeholder="Email"
          type="email"
          name="email"
          value={userData.email}
        />
        <span className="errorMassage">{validateObj.errors.email}</span>
        <input
          className={
            validateObj.errors.password ? "inputSignUpError" : "inputSignUp"
          }
          onChange={handleLogInChange}
          onBlur={handleLogInBluer}
          placeholder="Password"
          type="password"
          name="password"
          value={userData.password}
        />
        <span className="errorMassage">{validateObj.errors.password}</span>
        <div>
          <button
            className="sing_up_btn"
            onClick={onSignUpClick}
            disabled={validateObj.isValid}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
