import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import "./Popup.css";
/**
 * @author Greg Vincent
 * @date 1/26/23
 * Pursued useState over Reducer
 * TODO - add regex to form validation. Can't have special characters.
 * const validExpr = /^[A-Za-z]+$/; - regex for only A-Z and a-z
 * all todos will be in a future update
 */

// const userInfoReducer = (state, action) => {
//   if (action.type === "username_change") {
//     return {
//       isNameValid: validate(action.username),
//       nameTouched: true,
//     };
//   }
//   if (action.type === "password_change") {
//     return {
//       isPasswordValid: validate(action.password),
//       passwordTouched: true,
//     };
//   }
//   if (action.type === "username_inputblur") {
//     return {
//       isNameValid: validate(state.userName),
//       nameTouched: true,
//     };
//   }
//   if (action.type === "password_inputblur") {
//     return {
//       isPassWordValid: validate(state.passWord),
//       passwordTouched: true,
//     };
//   }
//   return {
//     userName: "",
//     passWord: "",
//     isNameValid: false,
//     isPasswordValid: false,
//     nameTouched: false,
//     passwordTouched: false,
//   };
// };

/**
 * This function will grow with regex
 * TODO - change so that if string is a space, form is invalid
 */
function validate(arg) {
  return !(String(arg).trim() === " " || String(arg).length === 0)
    ? true
    : false;
}

function Popup() {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const nameRef = useRef();
  const passwordRef = useRef();

  // const [nameIsValid, setIsNameValid] = useState(false);
  // const [passwordIsValid, setIsPasswordValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //btn onHover/offHover animation
  const [hovering, setHovering] = useState(false);

  //reducer takes a function, and an initial state object
  // const [userInfo, dispatchInfoCommand] = useReducer(userInfoReducer, {
  //   userName: "",
  //   passWord: "",
  //   isNameValid: null,
  //   isPasswordValid: null,
  //   nameTouched: null,
  //   passwordTouched: null,
  // });

  //function validates before submitting to backend
  async function handleSubmit(event) {
    event.preventDefault();
    if (
      validate(nameRef.current.value) &&
      validate(passwordRef.current.value)
    ) {
      setVisiblePopup(false);
      const submitName = nameRef.current.value;
      const submitPassword = passwordRef.current.value;
      // const submitName = "helloGreg";
      // const submitPassword = "helloVincent";
      try {
        //this call accesses the register endpoint from the client side
        await axios.post("/register", {
          submitName,
          submitPassword,
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseExit = () => {
    setHovering(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameTouched(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordTouched(true);
  };

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  return visiblePopup ? (
    <form className="Popup" onSubmit={handleSubmit}>
      <div className="Popup-inner">
        <h1>
          <em>Login or Signup</em>
        </h1>
        <br /> <br />
        <input
          type="text"
          placeholder="Username"
          id="username-input"
          ref={nameRef}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
        />
        {!validate(name) && nameTouched && (
          <p className="error-message" id="error-message-name">
            Username is invalid.
          </p>
        )}
        <br /> <br />
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          ref={passwordRef}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
        {!validate(password) && passwordTouched && (
          <p className="error-message" id="error-message-password">
            Password is invalid.
          </p>
        )}
        <br /> <br />
        <button
          type="Submit"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseExit}
          className={hovering ? "hovering" : "not-hovering"}
        >
          Submit
        </button>
      </div>
    </form>
  ) : (
    <div className="submit-welcome">
      <h1> Welcome, {nameRef.current.value}!</h1>
    </div>
  );
}

export default Popup;
