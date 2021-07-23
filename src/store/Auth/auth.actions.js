// import { isRegisteredAction } from "../actions/dateaction";

const signUp = (user, cb) => {
  localStorage.setItem("user", JSON.stringify(user));
  if (!!cb) {
    cb();
  }
};
const login = (userData, history, dispatch) => {
  const storedUser =
    localStorage.user && JSON.parse(localStorage.getItem("user"));
  const hasUser = !!storedUser;
  if (!hasUser) {
    history.push("/signup");
    alert("Error ");
  }
  if (
    userData.email === storedUser.email &&
    userData.password === storedUser.password
  ) {
    history.push("/table");
  } else {
    alert("Please enter correct password and email address");
  }
  localStorage.setItem("isRegistered", JSON.stringify(true));
  // dispatch(isRegisteredAction(true))
};

export { signUp, login };
