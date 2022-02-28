import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './Navbar.css'
import { isRegisteredAction } from '../../store/actions/dateaction';

const Navbar = () => {

    const isRegistered = useSelector((state) => state.auth.isRegistered);
    const dispatch = useDispatch()
    console.log(isRegistered,'isRegistered');
    const history = useHistory()


    const handleLogOut = () => {
        dispatch(isRegisteredAction(false))
        localStorage.setItem("isRegistered", JSON.stringify("false"));
        history.push('/')
    }

    return(
        <div className="customNavbar">
          {isRegistered ? (
            <div onClick={handleLogOut}>
              <NavLink to="/">Log Out </NavLink>
            </div>
          ) : (
            <div className='signUpLogIn'>
              <div>
                <NavLink to="/signup"> Sign Up </NavLink>{" "}
              </div>
              <div>
                <NavLink to="/"> Log In</NavLink>{" "}
              </div>
            </div>
          )}
        </div>
    )
}

export default Navbar;