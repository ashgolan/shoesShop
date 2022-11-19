import React from "react";
import "./ErrorPage.css";
import image from "../images/errorPage2.jpg";
function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "black",
      }}
    >
      <img className="errorImage" src={image} alt={image}></img>
    </div>
  );
}

export default ErrorPage;
