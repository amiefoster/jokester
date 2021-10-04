import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "flex",
    padding: "10px",
    margin: "5px 5px 5px",
    background: "#38B6FF",
    textDecoration: "none",
    color: "white", 
    justifyContent: "center",
    textAlign: "center"
    
  };

  
function NavBar() {
    return (
        
            <div>
          <NavLink 
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "#233DFF",
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
              Create Joke 
            </NavLink>

        </div>
        
    )
}

export default NavBar
