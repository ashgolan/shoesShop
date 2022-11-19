import React, { useEffect, useReducer } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import AddShoe from "./components/AddShoe";
import ContactUs from "./components/ContactUs";
import DisplayShoe from "./components/DisplayShoe";
import { INITIAL_STATE, postReducer } from "./components/postReducer";
import "./App.css";
function App() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  return (
    <div>
      <NavBar></NavBar>
      {state.loading && (
        <div className="loading">
          <span className="loader"></span>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<Homepage state={state} dispatch={dispatch} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="/DisplayShoe/:id"
          element={<DisplayShoe state={state} dispatch={dispatch} />}
        />
        <Route path="/AddShoe" element={<AddShoe state={state} dispatch={dispatch} />} />
      </Routes>
    </div>
  );
}

export default App;
