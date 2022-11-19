import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ACTION_TYPES } from "./postActionTypes";
import "./DisplayShoe.css";
function DisplayShoe(props) {
  const navigate = useNavigate();

  const [changeState, setChangeState] = useState({
    isChanged: false,
    state: null,
  });

  const [disabled, setDisabled] = useState({
    edit: "Edit",
    delete: "Delete",
    disabled: true,
  });

  const [values, setValues] = useState({
    brand: "",
    model: "",
    image: "",
    price: 0,
    color: "",
    size: "",
  });

  const shoeId = useParams();
  const tempState = props.state.post;

  const fetchData = async (url, kindOfrequest) => {
    try {
      props.dispatch({ type: ACTION_TYPES.FETCH_START });
      const { data } = await axios[kindOfrequest](url);
      props.dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      props.dispatch({
        type: ACTION_TYPES.FETCH_SUCCESS,
        payload: tempState,
      });
      setValues(data);
    } catch {
      props.dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData(
      `https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop/${shoeId.id}`,
      "get"
    );
  }, []);

  const updateData = async () => {
    try {
      props.dispatch({ type: ACTION_TYPES.FETCH_START });
      const { data } = await axios.put(
        `https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop/${shoeId.id}`,
        values
      );
      props.dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      setValues(data);
      console.log(tempState);
      const newData = tempState.map((shoe) => {
        if (shoe.id === shoeId.id) {
          shoe = data;
        }
        return shoe;
      });
      props.dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: newData });
      setChangeState((p) => ({ isChanged: true, state: "Item has Updated" }));
    } catch {
      props.dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      console.log("error");
    }
  };

  const editHandler = function (e) {
    e.preventDefault();
    if (e.target.textContent === "Edit") {
      setDisabled((prev) => ({
        disabled: false,
        edit: "Confirm",
        delete: "Cancel",
      }));
    } else if (e.target.textContent === "Confirm") {
      setDisabled((prev) => ({
        disabled: true,
        edit: "Edit",
        delete: "Delete",
      }));
      updateData();
    } else {
      setDisabled((prev) => ({
        disabled: true,
        edit: "Edit",
        delete: "Delete",
      }));
    }
  };
  const deleteData = async function () {
    try {
      const filteredData = tempState.filter((shoe) => {
        return shoe.id !== shoeId.id;
      });
      props.dispatch({ type: ACTION_TYPES.FETCH_START });
      const { data } = await axios.delete(
        `https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop/${shoeId.id}`,
        values
      );
      props.dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      setValues(data);
      props.dispatch({
        type: ACTION_TYPES.FETCH_SUCCESS,
        payload: filteredData,
      });
      setChangeState((p) => ({ isChanged: true, state: "Item has Deleted" }));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch {
      props.dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      console.log("error");
    }
  };
  const deleteHandler = function (e) {
    e.preventDefault();
    if (e.target.textContent === "Delete") {
      setDisabled((prev) => ({
        ...prev,
        edit: "Cancel",
        delete: "Confirm",
      }));
    } else if (e.target.textContent === "Confirm") {
      setDisabled((prev) => ({
        disabled: true,
        edit: "Edit",
        delete: "Delete",
      }));
      deleteData();
    } else {
      setDisabled((prev) => ({
        disabled: true,
        edit: "Edit",
        delete: "Delete",
      }));
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {!props.state.loading && (
        <div className="shoe_image">
          <img src={values.image} alt={values.image} />
        </div>
      )}
      {!props.state.loading && (
        <form className="display-shoe">
          <div className="display_title">
            <label className="display-title">Brand</label>
            <input
              disabled={disabled.disabled}
              name="brand"
              className="display-inputProps"
              type="text"
              value={values.brand}
              onChange={(e) => {
                const Brand = e.target.value;
                setValues((prev) => ({ ...prev, brand: Brand }));
              }}
            />
          </div>
          <div className="display_title">
            <label className="display-title">Model</label>
            <input
              disabled={disabled.disabled}
              name="model"
              className="display-inputProps"
              type="text"
              value={values.model}
              onChange={(e) => {
                const Model = e.target.value;
                setValues((prev) => ({ ...prev, model: Model }));
              }}
            />
          </div>
          <div className="display_title">
            <label className="display-title">Image</label>
            <input
              disabled={disabled.disabled}
              className="display-inputProps"
              type="text"
              name="image"
              value={values.image}
              onChange={(e) => {
                const Image = e.target.value;
                setValues((prev) => ({ ...prev, image: Image }));
              }}
            />
          </div>
          <div className="display_title">
            <label className="display-title">Price</label>
            <input
              disabled={disabled.disabled}
              name="price"
              className="display-inputProps"
              type="text"
              value={values.price}
              onChange={(e) => {
                const Price = e.target.value;
                setValues((prev) => ({ ...prev, price: Price }));
              }}
            />
          </div>
          <div className="display_title">
            <label className="display-title">Color</label>
            <input
              disabled={disabled.disabled}
              name="color"
              className="display-inputProps"
              type="text"
              value={values.color}
              onChange={(e) => {
                const Color = e.target.value;
                setValues((prev) => ({ ...prev, color: Color }));
              }}
            />
          </div>
          <div className="display_title">
            <label className="display-title">Size</label>
            <input
              disabled={disabled.disabled}
              name="size"
              className="display-inputProps"
              type="text"
              value={values.size}
              onChange={(e) => {
                const Size = e.target.value;
                setValues((prev) => ({ ...prev, size: Size }));
              }}
            />
          </div>
          {changeState.isChanged && (
            <h5 style={{ color: "brown" }}>{changeState.state}</h5>
          )}
          <div className="udpate_Delete">
            <button onClick={editHandler} className="edit" type="submit">
              {disabled.edit}
            </button>
            <button onClick={deleteHandler} className="delete" type="submit">
              {disabled.delete}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default DisplayShoe;
