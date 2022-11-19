import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
function Homepage(props) {
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
