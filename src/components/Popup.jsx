import React from "react";
import "./Popup.css";
/**
 * @author Greg Vincent
 * @date 12/15/22
 *On page load, this popup will have a form allowing the 
  user to sign into/up for the messaging service so they can use it.
 */
function Popup(props) {
  //conditionally rendering based on trigger value
  return props.trigger ? (
    <div className="Popup">
      <div className="Popup-inner">
        <button className="exit-btn">X</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
