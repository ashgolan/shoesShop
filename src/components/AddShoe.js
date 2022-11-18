import React, { useState } from "react";
import axios from "axios";
import "./AddShoe.css";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { ACTION_TYPES } from "./postActionTypes";
import { useReducer } from "react";

function AddShoe() {
  const [values, setValues] = useState({
    brand: "",
    model: "",
    image: "",
    price: 0,
    color: "",
    size: "",
  });

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const addShoeHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const newShoe = Object.fromEntries(formdata);
    setValues(newShoe);
    try {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      const { data } = await axios.post(
        "https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop",
        newShoe
      );
      console.log(data);
      dispatch({
        type: ACTION_TYPES.FETCH_SUCCESS,
        payload: [...state.post, data],
      });
    } catch {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      console.log("error");
    }
  };

  return (
    <div>
      <form onSubmit={addShoeHandler} className="addShoe">
        <div className="add_title">
          <label className="title">Brand</label>
          <input name="brand" className="inputProps" type="text" />
        </div>
        <div className="add_title">
          <label className="title">Model</label>
          <input name="model" className="inputProps" type="text" />
        </div>
        <div className="add_title">
          <label className="title">Image</label>
          <input className="inputProps" type="text" name="image" />
        </div>
        <div className="add_title">
          <label className="title">Price</label>
          <input name="price" className="inputProps" type="number" />
        </div>
        <div className="add_title">
          <label className="title">Color</label>
          <input name="color" className="inputProps" type="text" />
        </div>
        <div className="add_title">
          <label className="title">Size</label>
          <input name="size" className="inputProps" type="number" />
        </div>
        <button className="submit" type="submit">
          Add Shoe
        </button>
      </form>
    </div>
  );
}

export default AddShoe;
