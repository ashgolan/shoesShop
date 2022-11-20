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
    <div className="addshoePage">
      <form
        onChange={() => setAddMessage(false)}
        onSubmit={addShoeHandler}
        className="addShoe"
      >
        <div className="add_title">
          <label className="title">Brand</label>
          <input
            required
            name="brand"
            className="inputProps"
            type="text"
            value={values.brand}
            onChange={(e) => {
              setValues((p) => ({ ...p, brand: e.target.value }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Model</label>
          <input
            required
            name="model"
            className="inputProps"
            type="text"
            value={values.model}
            onChange={(e) => {
              setValues((p) => ({ ...p, model: e.target.value }));
            }}
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
            onChange={(e) => {
              setValues((p) => ({ ...p, image: e.target.value }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Price</label>
          <input
            required
            name="price"
            className="inputProps"
            type="number"
            value={values.price}
            onChange={(e) => {
              setValues((p) => ({ ...p, price: e.target.value }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Color</label>
          <input
            required
            name="color"
            className="inputProps"
            type="text"
            value={values.color}
            onChange={(e) => {
              setValues((p) => ({ ...p, color: e.target.value }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Size</label>
          <input
            required
            name="size"
            className="inputProps"
            type="text"
            value={values.size}
            onChange={(e) => {
              setValues((p) => ({ ...p, size: e.target.value }));
            }}
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
