import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect, Route, Switch } from "react-router-dom";
import LogInPage from "../LogIn/LogIn";
import Navbar from "../Navbar/Navbar";
import SignUpPage from "../SignUp/SignUp";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

function App() {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Switch>
          <Route path="/" component={LogInPage} exact />
          <Route path="/signup" component={SignUpPage} exact />
          <Route
            render={() => {
              if (isRegistered === true) {
                return <Table/>;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;

