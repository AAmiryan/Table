import { filteredArray, removedArray } from "../../Util/util";

import {
  ADD_NEW_DATA_ACTION,
  DELETE_ROW_ACTION,
  EDITED_ROW_ACTION,
  IS_REGISTERED_ACTION,
} from "../types";

export const deleteRowAction = (id, data) => {
  const removeData = removedArray(data, (item) => item.id !== id);
  return {
    type: DELETE_ROW_ACTION,
    payload: removeData,
  };
};

export const editedRowAction = (inputValue, data, id) => {
  const newArray = filteredArray(
    data,
    (el) => el.id === id,
    () => inputValue
  );
  return {
    type: EDITED_ROW_ACTION,
    payload: newArray,
  };
};

export const addNewDataAction = (addData) => {
  return {
    type: ADD_NEW_DATA_ACTION,
    payload: addData,
  };
};

export const isRegisteredAction = (bool) => {
  return (dispatch) =>
    dispatch({
      type: IS_REGISTERED_ACTION,
      payload: bool,
    });
};
