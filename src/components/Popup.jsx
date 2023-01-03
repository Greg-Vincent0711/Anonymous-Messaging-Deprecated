import React from "react";
import { useState, useRef } from "react";
import "./Popup.css";
/**
 * @author Greg Vincent
 * @date 12/15/22
 * First version of this Popup
 * TODO - recreate logic without using state so much
 * TODO - add regex to form validation. Can't have special characters.
 * const validExpr = /^[A-Za-z]+$/; - regex for only A-Z and a-z
 * all todos will be in a future update
 */
function Popup(props) {
  //sets popup visibility
  const [visiblePopup, setVisiblePopup] = useState(true);

  //ref for submission validation
  const nameRef = useRef();
  const passwordRef = useRef();

  //if either is empty and the form is touched display a value
  const [nameIsValid, setIsNameValid] = useState(false);
  const [passwordIsValid, setIsPasswordValid] = useState(false);
  const [wasNameTouched, setWasNameTouched] = useState(false);
  const [wasPasswordTouched, setWasPasswordTouched] = useState(false);

  //needed for instant validation for a user typing
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  //button animation state
  const [hovering, setHovering] = useState(false);

  /**
   * Validates with ref on submit
   */
  function handleSubmit(event) {
    event.preventDefault();
    setWasNameTouched(true);
    setWasPasswordTouched(true);

    const submittedName = String(nameRef.current.value).trim();
    const submittedPassword = String(passwordRef.current.value).trim();
    validate(submittedName) ? setIsNameValid(false) : setIsNameValid(true);
    validate(submittedPassword)
      ? setIsPasswordValid(false)
      : setIsPasswordValid(true);
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

  //quick development function
  // function tempSubmit() {
  //   setVisiblePopup(true);
  // }

  /**
   * This function will grow with regex
   */
  const validate = (arg) => {
    if (arg.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleNameChange = (event) => {
    setWasNameTouched(true);
    setEnteredName(event.target.value);
    if (validate(enteredName)) {
      setIsNameValid(true);
    }
  };

  const handlePasswordChange = (event) => {
    setWasPasswordTouched(true);
    setEnteredPassword(event.target.value);
    if (validate(enteredPassword)) {
      setIsPasswordValid(true);
    }
  };

  /**
   * onChange and onBlur functions
   * Both need to work with state
   * onSubmit needs ref
   */

  const handleNameBlur = () => {
    setWasNameTouched(true);
    if (!validate(enteredName)) {
      setIsNameValid(false);
      return;
    }
  };

  const handlePasswordBlur = () => {
    setWasPasswordTouched(true);
    if (!validate(enteredPassword)) {
      setIsPasswordValid(false);
      return;
    }
  };

  return visiblePopup ? (
    <div className="Popup">
      <div className="Popup-inner">
        {props.children}
        <h1>
          <em>Join the Conversation</em>
        </h1>
        <br /> <br />
        <input
          type="text"
          placeholder="       username"
          ref={nameRef}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          value={enteredName}
        />
        {!nameIsValid && wasNameTouched && (
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
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={enteredPassword}
        />
        {!passwordIsValid && wasPasswordTouched && (
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
