import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){


    return(
        <div className = 'navbar'>
            <ul>
           <li className="nav"> <Link to = 'recipes'>
            DIY at Home Brewery
            </Link> </li><br/>
            <li className="nav"><Link to = '/'>
                Home
            </Link></li>
            </ul>
        </div>
    )
}


export default NavBar;