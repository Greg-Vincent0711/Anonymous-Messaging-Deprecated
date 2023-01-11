/**
 * @author Greg Vincent
 * @date 12/15/22
 */
import React from "react";
import Popup from "./components/Popup";
import WelcomeMessage from "./components/WelcomeMessage";
import FormContext from "./context/form-context";
import "./App.css";
// import AboutPage from "./components/AboutPage";
/**
 * TODO - add code splitting in the future.
 * Certain components only need to be rendered at a
 * certain time
 */

function App() {
  return (
    //isFormVisible is not a constant value
    <FormContext.Provider value={{ isFormVisible: true }}>
      <Popup />
    </FormContext.Provider>
  );
}
export default App;
// <WelcomeMessage />
