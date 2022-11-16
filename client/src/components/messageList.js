import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Message = (props) => (
 <tr>
   <td>{props.message.name}</td>
   <td>{props.message.message}</td>
   <td>
     <button className="btn btn-link"
       onClick={() => {
         props.deleteMessage(props.message._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function MessageList() {
 const [messages, setMessages] = useState([]);
 
 // This method fetches the messages from the database.
 useEffect(() => {
   async function getMessages() {
     const response = await fetch(`http://localhost:5000/message/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const messages = await response.json();
     setMessages(messages);
   }
 
   getMessages();
 
   return;
 }, [messages.length]);
 
 // This method will delete a message
 async function deleteMessage(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newMessages = messages.filter((el) => el._id !== id);
   setMessages(newMessages);
 }
 
 // This method will map out the messages on the table
 function messageList() {
   return messages.map((message) => {
     return (
       <Message
         message={message}
         deleteMessage={() => deleteMessage(message._id)}
         key={message._id}
       />
     );
   });
 }
 
 // This following section will display the table with the messages of individuals.
 return (
   <div>
     <h3>Recent Messages</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Message</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{messageList()}</tbody>
     </table>
   </div>
 );
}