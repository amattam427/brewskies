import React from 'react';


function RecipeItem ({id, name, description, image}){

    const imageSize={
        width:'200px',
        height: '450px' 
     }

    return (
        <div className="recipe-list">
            <h2 className="recipe-name">{name}</h2>
                <h3 className="recipe-desc">{description}</h3>
            <div className="div2">
            <img className= "recipe-image" style={imageSize} src={image} alt={name}/><br/>
            <h3>Ingredients</h3>
            <ul>
            </ul>
            </div>
        </div>
    )
}



export default RecipeItem;