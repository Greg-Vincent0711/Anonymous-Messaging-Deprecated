import React from 'react';
import Navbar from './components/NavbarComponent/Navbar';
import Form from './components/Form-Component/Form'
//all components are put here
function App(){
    return(
        <div>
            <Navbar>
                <h3>Anonymous</h3>
                <h3>Eavesdrop</h3>
                <h3>Who and Why</h3>
            </Navbar>
            <Form
            formTitle = "Login or Sign Up"
            />
        </div>
    )
}

export default App;