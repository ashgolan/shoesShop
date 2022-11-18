import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { ACTION_TYPES } from "./postActionTypes";
import "./DisplayShoe.css";
function DisplayShoe() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const [values, setValues] = useState({
    brand: "",
    model: "",
    image: "",
    price: 0,
    color: "",
    size: "",
  });
  const shoeId = useParams();
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        dispatch({ type: ACTION_TYPES.FETCH_START });
        const { data } = await axios.get(url);
        dispatch({ type: ACTION_TYPES.FETCH_TEMP, payload: data });
        setValues(data);
      } catch {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        console.log("error");
      }
    };
    fetchData(
      `https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop/${shoeId.id}`
    );
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div className="shoe_image">
        <img src={values.image} />
      </div>
      <form className="addShoe">
        <div className="add_title">
          <label className="title">Brand</label>
          <input
            disabled
            name="brand"
            className="inputProps"
            type="text"
            value={values.brand}
            onChange={(e) => {
              const Brand = e.target.value;
              setValues((prev) => ({ ...prev, brand: Brand }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Model</label>
          <input
            disabled
            name="model"
            className="inputProps"
            type="text"
            value={values.model}
            onChange={(e) => {
              const Model = e.target.value;
              setValues((prev) => ({ ...prev, model: Model }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Image</label>
          <input
            disabled
            className="inputProps"
            type="text"
            name="image"
            value={values.image}
            onChange={(e) => {
              const Image = e.target.value;
              setValues((prev) => ({ ...prev, image: Image }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Price</label>
          <input
            disabled
            name="price"
            className="inputProps"
            type="number"
            value={values.price}
            onChange={(e) => {
              const Price = e.target.value;
              setValues((prev) => ({ ...prev, price: Price }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Color</label>
          <input
            disabled
            name="color"
            className="inputProps"
            type="text"
            value={values.color}
            onChange={(e) => {
              const Color = e.target.value;
              setValues((prev) => ({ ...prev, color: Color }));
            }}
          />
        </div>
        <div className="add_title">
          <label className="title">Size</label>
          <input
            disabled
            name="size"
            className="inputProps"
            type="number"
            value={values.size}
            onChange={(e) => {
              const Size = e.target.value;
              setValues((prev) => ({ ...prev, size: Size }));
            }}
          />
        </div>
        <div className="udpate_Delete">
          <button className="edit" type="submit">
            Edit
          </button>
          <button className="delete" type="submit">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DisplayShoe;
