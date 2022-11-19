import React, { useState } from "react";
import axios from "axios";
import "./AddShoe.css";
import { ACTION_TYPES } from "./postActionTypes";

function AddShoe(props) {
  const [addMessage, setAddMessage] = useState(false);
  const [values, setValues] = useState({
    brand: "",
    model: "",
    image: "",
    price: 0,
    color: "",
    size: "",
  });

  const addShoeHandler = async (e) => {
    e.preventDefault();
    setAddMessage(false);
    const formdata = new FormData(e.target);
    const newShoe = Object.fromEntries(formdata);
    setValues(newShoe);
    try {
      props.dispatch({ type: ACTION_TYPES.FETCH_START });
      const { data } = await axios.post(
        "https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop",
        newShoe
      );
      props.dispatch({
        type: ACTION_TYPES.FETCH_SUCCESS,
        payload: [...props.state.post, data],
      });
      setAddMessage(true);
    } catch {
      props.dispatch({ type: ACTION_TYPES.FETCH_ERROR });
    }
  };

  return (
    <div>
      <form
        onChange={() => setAddMessage(false)}
        onSubmit={addShoeHandler}
        className="addShoe"
      >
        <div className="add_title">
          <label className="title">Brand</label>
          <input
            name="brand"
            className="inputProps"
            type="text"
            value={values.brand}
          />
        </div>
        <div className="add_title">
          <label className="title">Model</label>
          <input
            name="model"
            className="inputProps"
            type="text"
            value={values.model}
          />
        </div>
        <div className="add_title">
          <label className="title">Image</label>
          <input
            required
            className="inputProps"
            type="text"
            name="image"
            value={values.image}
          />
        </div>
        <div className="add_title">
          <label className="title">Price</label>
          <input
            name="price"
            className="inputProps"
            type="number"
            value={values.price}
          />
        </div>
        <div className="add_title">
          <label className="title">Color</label>
          <input
            name="color"
            className="inputProps"
            type="text"
            value={values.color}
          />
        </div>
        <div className="add_title">
          <label className="title">Size</label>
          <input
            name="size"
            className="inputProps"
            type="text"
            value={values.size}
          />
        </div>
        {addMessage && (
          <h5 style={{ color: "brown" }}>The shoe was added succefuly</h5>
        )}
        <button className="submit" type="submit">
          Add Shoe
        </button>
      </form>
    </div>
  );
}

export default AddShoe;
