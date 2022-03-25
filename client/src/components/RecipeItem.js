import React from 'react';


function RecipeItem ({id, name, description, image}){

    return (
        <div>
            <h2 className="recipe-name">{name}</h2>
                <h3 className="recipe-desc">{description}</h3>
            <div className="div2">
            <img className= "recipe-image" src={image} alt={name}/><br/>
            <h3>Ingredients</h3>
            <ul>
            </ul>
            </div>
        </div>
    )
}



export default RecipeItem;