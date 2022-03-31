import React from 'react';
import { Link } from "react-router-dom";


function Header({user, onLogout}){

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
    
    return (
        <header className="header">
            <h1>Brewskies</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/login">Click Here to Login</Link>
            )}
        </header>
    )
}

export default Header;