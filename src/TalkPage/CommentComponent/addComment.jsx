/**
 * addComment function
 * editComment and showComments will all be rendered on showComment
 * @author Gregory Vincent
 * 11/28/22
 */
import "./addComment.css";
import React, { useState } from "react";

export default function addComment() {
  const [message, setMessage] = useState({
    message: "",
  });

  const [visibleCommentForm, setVisibleCommentForm] = useState(false);

  function newComment(message) {
    return setMessage((prev) => {
      return { ...prev, ...message };
    });
  }

  //handling submission
  async function handleClick(event) {
    event.preventDefault();

    setVisibleCommentForm(true);

    // const newMessage = { ...message };
    /**
     * Fetch accesses resources across a network - actually connects to the server
     * through the record function
     * two args:
     * resource(the request object - link in this case)
     * options - JSON to describe how to interact with the resource
     */
    // await fetch("http://localhost:5000/record/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newMessage),
    // }).catch((error) => {
    //   window.alert(error);
    //   return;
    // });
    //reset the message
    // setMessage({ name: "", message: "" });
    //bring the user back to the home page
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={!visibleCommentForm ? "visibleBtn" : "invisibledBtn"}
      >
        <FontAwesomeIcon icon="fas fa-plus-square" />
      </button>
      {visibleCommentForm && <div></div>}
    </div>
  );
}
