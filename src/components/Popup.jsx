import React from "react";
import { useState, useRef, useContext } from "react";
import FormContext from "../context/form-context";
import "./Popup.css";
/**
 * @author Greg Vincent
 * @date 12/15/22
 * First version of this Popup
 * TODO - refactor logic so it isn't so reliant on state
 * TODO - i.e, with useEffect, useReducer, etc
 * TODO - add regex to form validation. Can't have special characters.
 * const validExpr = /^[A-Za-z]+$/; - regex for only A-Z and a-z
 * all todos will be in a future update
 */
function Popup(props) {
  const [visiblePopup, setVisiblePopup] = useState(true);

  const nameRef = useRef();
  const passwordRef = useRef();

  const [nameIsValid, setIsNameValid] = useState(false);
  const [passwordIsValid, setIsPasswordValid] = useState(false);
  const [wasNameTouched, setWasNameTouched] = useState(false);
  const [wasPasswordTouched, setWasPasswordTouched] = useState(false);

  //needed for instant validation for a user typing
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  //btn onHover/offHover animation
  const [hovering, setHovering] = useState(false);

  let ctx = useContext(FormContext);
  ctx.isFormVisible = visiblePopup;
  // ctx.showName = nameRef.current.value;

  function handleSubmit(event) {
    event.preventDefault();
    setWasNameTouched(true);
    setWasPasswordTouched(true);
    const submittedName = String(nameRef.current.value).trim();
    const submittedPassword = String(passwordRef.current.value).trim();
    validate(submittedName) ? setIsNameValid(true) : setIsNameValid(false);
    validate(submittedPassword)
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);
    if (nameIsValid && passwordIsValid) {
      setVisiblePopup(false);
      backendFormSubmission();
    }
  }

  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseExit = () => {
    setHovering(false);
  };

  async function backendFormSubmission() {
    const identificationPair = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(identificationPair),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  /**
   * This function will grow with regex
   */
  const validate = (arg) => {
    //empty space is length 1
    if (!(arg === " " || arg.length === 0)) {
      return true;
    }
    return false;
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

  return ctx.isFormVisible ? (
    <div className="Popup">
      <div className="Popup-inner">
        {props.children}
        <h1>
          <em>Join the Conversation</em>
        </h1>
        <br /> <br />
        <input
          type="text"
          placeholder="Username"
          id="username-input"
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
          placeholder="Password"
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
