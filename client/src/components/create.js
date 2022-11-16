import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   message: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new message to the database.
   const newMessage = { ...form };
 
   await fetch("http://localhost:5000/message/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newMessage),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", message: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Broadcast New Message</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="message">Message</label>
         <input
           type="text"
           className="form-control"
           id="message"
           value={form.message}
           onChange={(e) => updateForm({ message: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Broadcast Message"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}