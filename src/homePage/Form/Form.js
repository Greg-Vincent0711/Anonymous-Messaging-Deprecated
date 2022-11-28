import React from "react";
import "./Form.css";
function Form(props) {
  return (
    <div>
      <h1>
        <em>{props.formTitle}</em>
      </h1>
      <div className="Form">
        <form>
          <div className="input-row">
            <div className="input-group userName">
              <input placeholder="username" />
            </div>
            <div className="input-group passWord">
              <input placeholder="password" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
