/**
 * @author Gregory Vincent
 * @date 1/6/23
 * Unnecessary render not completely implemented yet
 * Bonus feature - 1/11/23
 */

import React, { useContext } from "react";
import FormContext from "../context/form-context";
import "./WelcomeMessage.css";
function WelcomeMessage() {
  let ctx = useContext(FormContext);

  return !ctx.isFormVisible ? (
    <div>
      <h1 className="visible-welcome"> Welcome, {ctx.showName} </h1>
    </div>
  ) : (
    ""
  );
}
export default WelcomeMessage;
