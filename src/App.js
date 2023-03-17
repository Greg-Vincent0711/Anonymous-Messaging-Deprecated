/**
 * @author Greg Vincent
 * @date 12/15/22
 */
import React from "react";
import Popup from "./components/Popup";
import AboutPage from "./components/AboutPage";
import "./App.css";
import axios from "axios";

/**
 * TODO - add code splitting in the future.
 * Certain components only need to be rendered at a
 * certain time
 */

function App() {
  // requests get appended to this URL 
  axios.defaults.baseURL = "http://localhost:5000";
  //send cookies automatically
  axios.defaults.withCredentials = true;
  return (
    <>
      <Popup />
      <AboutPage />
    </>
  );
}
export default App;
