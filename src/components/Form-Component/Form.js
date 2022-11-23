import React from 'react';

export default function Form(props){
    return(
        <div>
            <h1>{props.formTitle}</h1>
            {/** Form Frontend */}
            <div className="Form">
                <form>
                <div className="input-row">
                    <div className="input-group userName">
                    <input type="text" placeholder="username"></input>
                    </div>
                    <div className="input-group passWord">
                    <input type="text" placeholder="Password"></input>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
