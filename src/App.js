/**
 * @author Greg Vincent
 * @date 12/15/22
 */
import React from "react";
import Popup from "./components/Popup";
// import WelcomeMessage from "./components/WelcomeMessage";
import FormContext from "./context/form-context";
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
    <FormContext.Provider value={{ isFormVisible: true }}>
      <Popup />
    </FormContext.Provider>
    <AboutPage/>
    </>
  );
}
export default App;

