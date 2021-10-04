import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "10px 10px 10px",
    background: "hotpink",
    textDecoration: "none",
    color: "white",
    
  };

  
function NavBar() {
    return (
        
            <div>
          <NavLink 
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "hotpink",
            }}
            >
              Home
            </NavLink>

            <NavLink
            to="/jokes"
            exact
            style={linkStyles}
            activeStyle={{
              background: "hotpink",
            }}
            >
                Jokes
            </NavLink>

            <NavLink
            to="/create-joke"
            exact
            style={linkStyles}
            activeStyle={{
              background: "hotpink",
            }}
            >
              Create Joke 
            </NavLink>

        </div>
        
    )
}

export default NavBar
