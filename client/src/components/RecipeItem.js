import React from 'react';


function RecipeItem ({id, name, description, image, ingredients}){

    const imageSize={
        width:'200px',
        height: '450px' 
     }


     console.log(ingredients.malt)
    return (
        <div className="recipe-list">
            <h2 className="recipe-name">{name}</h2>
                <h3 className="recipe-desc">{description}</h3>
            <div className="div2">
            <img className= "recipe-image" style={imageSize} src={image} alt={name}/><br/>
            <h3>Ingredients</h3>
            <ol>
                
                {ingredients.malt.map((i)=>(
                    <li key = {i.id}>{i.name} <br/></li>
                ))}
                {ingredients.hops.map((i)=>(
                    <li key = {i.id}>{i.name}</li>
                ))}

                
            </ol>
            </div>
        </div>
    )
}



export default RecipeItem;