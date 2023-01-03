/**
 * @author Greg Vincent
 * @date 12/15/22
 */
import React from "react";
import Popup from "./components/Popup";
import AboutPage from "./components/AboutPage";
/**
 * TODO - add code splitting.
 * Certain components only need to be rendered at a
 * certain time
 */
function App() {
  return (
    <div className="app-container">
      <Popup />
    </div>
  );
}

// <AboutPage />
export default App;
