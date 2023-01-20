/**
 * @author Greg Vincent
 * @date 12/15/22
 */
import React from "react";
import Popup from "./components/Popup";
import AboutPage from "./components/AboutPage";
import "./App.css";

/**
 * TODO - add code splitting in the future.
 * Certain components only need to be rendered at a
 * certain time
 */

function App() {
  return (
    <>
        <Popup />
      <AboutPage/>
    </>
  );
}
export default App;

