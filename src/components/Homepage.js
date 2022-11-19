import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { ACTION_TYPES } from "./postActionTypes";
import "./Homepage.css";
function Homepage(props) {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        dispatch({ type: ACTION_TYPES.FETCH_START });
        const { data } = await axios.get(url);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        console.log("error");
      }
    };
    fetchData("https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop");
  }, []);
  const shoes = state.post.map((p) => {
    return (
      <div className="shoe-card" key={p.id}>
        <Link to={`/DisplayShoe/${p.id}`}>
          <img src={p.image}></img>
        </Link>
        <h4>{p.price}$</h4>
      </div>
    );
  });

  return <div className="homepage-container">{shoes}</div>;
}

export default Homepage;
