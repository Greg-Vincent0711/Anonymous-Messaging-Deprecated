/**
 * @author Gregory Vincent
 */
 import React from "react";
 import { Link } from "react-router-dom";
 import "./Navbar.css";
 function Navbar(props) {
   return (
     <nav className="Navbar">
       <ul>
        <li>
          <Link to="/" id = "homepage">Anonymous</Link>
        </li>
         <li>
            <Link to="/EavesDrop">Eavesdrop</Link>
         </li>
         <li>
           <Link to="/WhoWhyPage">Why</Link>
         </li>
       </ul>
     </nav>
   );
 }
 
 export default Navbar;