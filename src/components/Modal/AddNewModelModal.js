import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { addNewDataAction } from "../../store/actions/dateaction";
import { useDispatch } from "react-redux";
import "./Modal.css";

const AddNewModelModal = ({ isOpen, addNew }) => {
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState({
    brand: "",
    engine: "",
    model: "",
  });
  const [url, setImgUrl] = useState("");

  const handleClose = () => {
    addNew(!isOpen);
  };

  const handleFileChange = (event) => {
    setImgUrl(URL.createObjectURL(event.target.files[0]));
  };
  const handleChange = (e) => {
    setNewValue({
      ...newValue,
      [e.target.name]: e.target.value,
      id: Math.random() * 1000,
    });
  };

  const handleSave = (newValue) => {
    const obj = { ...newValue, url };
    dispatch(addNewDataAction(obj));
    setNewValue({ brand: "", engine: "", model: "" });
    addNew(!isOpen);
  };

  const handleOnKeyDown = (event) => {
    const obj = { ...newValue, url };
    if (event.key === "Enter") {
      dispatch(addNewDataAction(obj));
      setNewValue({ brand: "", engine: "", model: "" });
      addNew(!isOpen);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title> Modal heading </Modal.Title>
      </Modal.Header>
      <Modal.Body> Modal</Modal.Body>
      <Modal.Footer onKeyPress={handleOnKeyDown}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              {" "}
              Brand{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
            name="brand"
            value={newValue.brand}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              {" "}
              Engine{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
            name="engine"
            value={newValue.engine}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              {" "}
              Model{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
            name="model"
            value={newValue.model}
          />
        </InputGroup>
        <div className="addImg">
          Add Img
          <input
            className="addImgFile"
            name="url"
            onChange={handleFileChange}
            type="file"
          />
        </div>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => handleSave(newValue)}
          disabled={!newValue.brand || !newValue.engine || !newValue.model}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddNewModelModal;
