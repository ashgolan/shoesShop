import React, { useEffect, useReducer } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { ACTION_TYPES } from "./components/postActionTypes";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import AddShoe from "./components/AddShoe";
import ContactUs from "./components/ContactUs";
import DisplayShoe from "./components/DisplayShoe";
import { INITIAL_STATE, postReducer } from "./components/postReducer";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
function App() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        dispatch({ type: ACTION_TYPES.FETCH_START });
        const { data } = await axios.get(url);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      }
    };
    fetchData("https://6374adb808104a9c5f85d1fb.mockapi.io/shoesShop");
  }, []);

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
        <Route
          path="/AddShoe"
          element={<AddShoe state={state} dispatch={dispatch} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
