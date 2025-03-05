import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidemenu.css";

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {setIsOpen(!isOpen);};
    
      return (
        <aside className={`sidemenu ${isOpen ? "open" : ""}`}>
          <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className={`burgerbar ${isOpen ? "open" : ""}`}></div>
          </div>
          <nav>
            <ul>
            <li>
                </li>
            </ul>
            
              
          </nav>
        </aside>
      );
    };
    
    export default SideMenu;