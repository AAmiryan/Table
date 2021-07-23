import React from "react";
import Row from "../Row/Row";
import "./Table.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddNewModelModal from "../Modal/AddNewModelModal";
// import SignUpPage from '../SignUp/SignUp';
// import LogInPage from '../LogIn/LogIn';

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  let data = useSelector((state) => state.cars.cars);
  const userData = JSON.parse(localStorage.getItem('user'))
  const addNew = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="tableContainer">
      <div className='text'> Hello {userData.name} {userData.lastName}  </div>
      <div className="topLine">
        <div className="rowTop"> Brand </div>
        <div className="rowTop"> Engine </div>
        <div className="rowTop"> Model </div>
        <div className="rowTop"> Image </div>
        <div className="rowTop"> Delete/Edit </div>
      </div>
      <div>
        {
          data.map((item, index) => <Row item={item} key={index} />)
        }
      </div>
      <AddNewModelModal isOpen={isOpen} addNew={addNew} />

      <button className="addButton" onClick={addNew}>
        Add
      </button>
    </div>
  );
}

export default Table;
