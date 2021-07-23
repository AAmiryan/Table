import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRowAction } from "../../store/actions/dateaction";
import EditedModal from "../Modal/Modal";
import "./Row.css";

function Row(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({});
  const data = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();

  const onHandleDelete = (id) => {
    dispatch(deleteRowAction(id, data));
  };

  const onHandleEdit = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="wrapRow">
      <div className="rowBody">{props.item.brand}</div>
      <div className="rowBody">{props.item.engine}</div>
      <div className="rowBody">{props.item.model}</div>
      <div className="rowBody">
        <img src={props.item.url} alt="img" className="img"></img>
      </div>
      <div className="rowBody rowButton">
        <div>
          <button
            className="buttonRow"
            onClick={() => onHandleDelete(props.item.id)}
          >
            Delete
          </button>
        </div>
        <div>
          <button className="buttonRow edit" onClick={onHandleEdit}>
            Edit
          </button>
          <EditedModal
            onHandleEdit={onHandleEdit}
            isModalOpen={isModalOpen}
            inputValue={inputValue}
            setInputValue={setInputValue}
            id={props.item.id}
            datas={data}
          />
        </div>
      </div>
    </div>
  );
}

export default Row;
