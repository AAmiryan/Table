import { Button, InputGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editedRowAction } from '../../store/actions/dateaction';
import "./Modal.css"

const EditedModal = ({ isModalOpen, inputValue, setInputValue, id,  datas, onHandleEdit}) => {
 
    const dispatch = useDispatch()
    const data = useSelector(state => state.cars.cars)
    const [url, setUrl] = useState('')

    const index = datas.findIndex(el => el.id === id)
    
    const handleClose = () => {
        onHandleEdit(!isModalOpen);
        }

    const handleFileEdit = (event) => {
        setUrl(URL.createObjectURL(event.target.files[0]))
    }

    const handleChange = (e,type) => {
            setInputValue({
                ...inputValue,
                [type]:e.target.value,
                id:Math.random()*6400,                
            }
            )}

    const handleSave = (inputValue) =>{ 
        const newInputValue = {
            ...inputValue,
            url,
        }
        dispatch(editedRowAction(newInputValue,data,id));   
        onHandleEdit(!isModalOpen);
    }

    const handleOnKeyDown = (event) => {
        const newInputValue = {
            ...inputValue,
            url,
        }
        if(event.key === 'Enter'){
            dispatch(editedRowAction(newInputValue,data,id));   
            onHandleEdit(!isModalOpen);
        }
    }
    
    return ( 
        <Modal show = { isModalOpen }
            onHide = { handleClose }
            animation = { true } >
                <Modal.Header closeButton>
                < Modal.Title > Modal heading </Modal.Title> 
                             </Modal.Header > 
                <Modal.Body > Modal</Modal.Body> 
            <Modal.Footer onKeyPress={handleOnKeyDown}>
                <InputGroup 
                    className = "mb-3"
                    onChange = {(e) => handleChange(e,'brand')}
                    name = 'brand' 
                >
                    <InputGroup.Prepend >
                        <InputGroup.Text id = "inputGroup-sizing-default" > Brand </InputGroup.Text> 
                    </InputGroup.Prepend > 
                    <FormControl 
                        aria-label = "Default"
                        aria-describedby = "inputGroup-sizing-default" 
                        defaultValue={datas[index].brand}
                        />
                </InputGroup> 
                <InputGroup 
                    className = "mb-3" 
                    onChange = {e => handleChange(e,'engine')}
                    name = 'engine'
                    >
                    <InputGroup.Prepend>
                        <InputGroup.Text id = "inputGroup-sizing-default"> Engine </InputGroup.Text> 
                    </InputGroup.Prepend > 
                    <FormControl 
                        aria-label = "Default"
                        aria-describedby="inputGroup-sizing-default"
                        defaultValue={datas[index].engine}
                        />
                </InputGroup>
                <InputGroup 
                    className = "mb-3" 
                    onChange = {e => handleChange(e,'model')}
                    name = 'model'
                    >
                    <InputGroup.Prepend >
                        <InputGroup.Text id = "inputGroup-sizing-default" > Model </InputGroup.Text> 
                    </InputGroup.Prepend > 
                    <FormControl 
                    aria-label = "Default"
                    aria-describedby = "inputGroup-sizing-default"
                    defaultValue={datas[index].model}
                    />
                </InputGroup>

                <div className='addImg'>
                    Add Img
                    <input 
                        className='addImgFile'
                        name="url"
                        onChange = {handleFileEdit}
                        type='file'/>               
                </div>
            <Button variant = "secondary"
                onClick = { handleClose } >
                    Close 
                </Button> 
            <Button variant = "primary"
                
                onClick = {() => handleSave(inputValue) } 
                disabled={!(inputValue.model&&inputValue.brand&&inputValue.engine&&url)}
                >
                    Save Changes 
                </Button>            
             </Modal.Footer > 
        </Modal>

    )
}
export default EditedModal