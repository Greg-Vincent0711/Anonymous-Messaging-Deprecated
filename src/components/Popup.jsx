import React from "react";
import { useState, useRef } from "react";
import "./Popup.css";
/**
 * @author Greg Vincent
 * @date 12/15/22
 * First version of this Popup
 * In future versions with more experience, less state will be used
 */
function Popup(props) {
  //sets popup visibility
  const [visiblePopup, setVisiblePopup] = useState(true);

  //keep a reference to submitted values
  const nameRef = useRef();
  const passwordRef = useRef();

  //used for validating those two form values - if they're empty, display a message
  const [nameIsValid, setIsNameValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  //Only display message after form is submitted
  const [wasTouched, setWasTouched] = useState(false);

  //button animation state
  const [hovering, setHovering] = useState(false);

  //username and password checking on submit
  function handleSubmit(event) {
    event.preventDefault();
    setWasTouched(true);
    //using String casting for the length property
    const submittedName = String(nameRef.current.value).trim();
    const submittedPassword = String(passwordRef.current.value).trim();
    submittedName.length === 0 ? setIsNameValid(false) : setIsNameValid(true);
    submittedPassword.length === 0
      ? setPasswordIsValid(false)
      : setPasswordIsValid(true);
    nameIsValid && passwordIsValid
      ? setVisiblePopup(false)
      : setVisiblePopup(true);
  }

  //functions for mouseOn/mouseOff hover animation
  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseExit = () => {
    setHovering(false);
  };

  return visiblePopup ? (
    <div className="Popup">
      <div className="Popup-inner">
        {props.children}
        <h1>
          <em>Join the Conversation</em>
        </h1>
        <br /> <br />
        <input type="text" placeholder="       username" ref={nameRef} />
        {!nameIsValid && wasTouched && (
          <p className="error-message" id="error-message-name">
            Username can't be empty.
          </p>
        )}
        <br /> <br />
        <input
          type="text"
          id="password-input"
          placeholder="       password"
          ref={passwordRef}
        />
        {!passwordIsValid && wasTouched && (
          <p className="error-message" id="error-message-password">
            Password can't be empty.
          </p>
        )}
        <br /> <br />
        <button
          type="Submit"
          onClick={handleSubmit}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseExit}
          className={hovering ? "hovering" : "not-hovering"}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
