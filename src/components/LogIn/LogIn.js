import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../store/Auth/auth.actions";
import validate from "../../Util/validate";
import "./LogIn.css";

const LogInPage = (props) => {
  const [userLogInData, setUserLogInData] = useState({
    email: "",
    password: "",
    id: Math.random() * 3500,
  });
  const [isValid, setIsValid] = useState({ isValid: true, errors: {} });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (props.location.state) {
      setUserLogInData(props.location.state);
      setIsValid({ isValid: false, errors: {} });
    }
  }, [props.location.state]);

  const handleLogInChange = (e) => {
    setUserLogInData({
      ...userLogInData,
      [e.target.name]: e.target.value,
    });
    setIsValid(validate(e.target, e.target.name));
  };

  const handleLogInBlur = (e) => {
    setIsValid(validate(e.target, e.target.name));
  };

  const onSignUpClick = () => {
    login(userLogInData, history, dispatch);
  };

  return (
    <div className="wrapContainer">
      <div className="logInContainer">
        <input
          className={isValid.errors.email ? "inputError" : "inputLogIn"}
          onChange={handleLogInChange}
          onBlur={handleLogInBlur}
          placeholder="Email"
          type="email"
          name="email"
          value={userLogInData.email}
        />
        <span className="errorMassageLogIn">{isValid.errors.email}</span>
        <input
          className={isValid.errors.password ? "inputError" : "inputLogIn"}
          onBlur={handleLogInBlur}
          onChange={handleLogInChange}
          placeholder="Password"
          type="password"
          name="password"
          value={userLogInData.password}
        />
        <span className="errorMassageLogIn">{isValid.errors.password}</span>
        <div>
          <button
            className="div_button"
            onClick={onSignUpClick}
            disabled={isValid.isValid}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
