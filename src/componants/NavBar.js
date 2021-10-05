import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    padding: "10px 20px 10px 20px",
    margin: "10px 10px 10px 10px",
    background: "#f1d302",
    textDecoration: "none",
    color: "white", 
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "8px",
    
  };

  
function NavBar() {
    return (
        
            <div className="nav-bar">
          <NavLink 
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#235789",
              
            }}
            >
              Home
            </NavLink>

            <NavLink
            to="/jokes"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#235789",
            }}
            >
                Jokes
            </NavLink>

            <NavLink
            to="/create-joke"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#235789",
            }}
            >
              Create
            </NavLink>

        </div>
        
    )
}

export default NavBar;
