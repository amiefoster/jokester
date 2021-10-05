import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    padding: "10px 20px 10px 20px",
    margin: "10px 10px 10px 10px",
    background: "#c60112",
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
              background: "rgb(198,1,18)",
              
            }}
            >
              Home
            </NavLink>

            <NavLink
            to="/jokes"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#233DFF",
            }}
            >
                Jokes
            </NavLink>

            <NavLink
            to="/create-joke"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#233DFF",
            }}
            >
              Create
            </NavLink>

        </div>
        
    )
}

export default NavBar;
