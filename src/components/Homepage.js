import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ACTION_TYPES } from "./postActionTypes";
import "./Homepage.css";
function Homepage(props) {
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        props.dispatch({ type: ACTION_TYPES.FETCH_START });
        const { data } = await axios.get(url);
        props.dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch {
        props.dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        console.log("error");
      }
    };
    fetchData("https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop");
  }, []);

  const shoes = props.state.post.map((p) => {
    return (
      <div className="shoe-card" key={p.id}>
        <Link to={`/DisplayShoe/${p.id}`}>
          {" "}
          <img src={p.image}></img>{" "}
        </Link>
        <h3 className="price">{p.price}$</h3>
      </div>
    );
  });

  return <div className="homepage-container">{shoes}</div>;
}

export default Homepage;
