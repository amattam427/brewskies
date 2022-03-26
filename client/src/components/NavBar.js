import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){


    return(
        <div className = 'navbar'>
            <Link to = 'recipes'>
            DIY at Home Brewery
            </Link> <br/>
            <Link to = '/'>
                Home
            </Link>
        </div>
    )
}


export default NavBar;