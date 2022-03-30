import React from 'react';


function Ingredients({id, malt_name}){



    return(
        <div className="ingredients-body">
            <ul>
                <li>{malt_name}</li>
            </ul>
           

        </div>
    )
}


export default Ingredients;