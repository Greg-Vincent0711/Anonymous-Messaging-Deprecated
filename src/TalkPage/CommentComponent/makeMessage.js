/**
 * Component creates the comments/messages shown in Talk.js
 * makeMessage, editComment and showComment will all be rendered on showComment
 * @author Gregory Vincent
 * 11/28/22
 */

import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./makeMessage.css";
export default function makeMessage() {
  const [message, setMessage] = useState({
    message: "",
  });
  const navigate = useNavigate();
  function makeMessage(message) {
    return setMessage((prev) => {
      return { ...prev, ...message };
    });
  }

  //handling submission
  async function handeSubmit(e) {
    e.preventDefault();
    const newMessage = { ...message };

    /**
     * Fetch accesses resources across a network - actually connects to the server
     * through the record function
     * two args:
     * resource(the request object - link in this case)
     * options - JSON to describe how to interact with the resource
     */
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      /**In this context, catch is a callback function */
      .catch((error) => {
        window.alert(error);
        return;
      });
    //reset the message
    setMessage({ name: "", message: "" });
    //bring the user back to the home page
    navigate("/");
  }

  /**
   * From here below is JSX for the actual comment component
   * In this state the user adds a comment
   *
   */
  return (
    <div className="comment-backdrop">
      <div className="comment-stage">
        <h3>Send a Message Below</h3>
        <textarea className="typing-section" rows="4" col="16"></textarea>
      </div>
    </div>
  );
}
