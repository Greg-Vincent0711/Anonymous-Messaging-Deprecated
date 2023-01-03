/**
 * @author Gregory Vincent
 * @date 12/25/22
 */
import React from "react";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="main-content">
      <h1>Why was this app made?</h1>
      {/**Filler text can always change. */}
      <p>
        Really, some friends were bored in their college library. Of course,
        learning is crucical to a successful life. For the people who are
        motivated however, may know what you want to learn. For those of us
        going into web development, we do not want to learn about
        Electromagnetic Induction, or how to appeal to Pathos. Learning a Tech
        Stack, or more specifically{" "}
        <em>concepts that will actually be useful to our careers</em>
        is what our learning really is.
      </p>
    </div>
  );
}

export default AboutPage;
