import React from "react";
import './stylesheets/Recipes.css';

function Recipe(props) {
    return(
        <div className="recipe">
            <img src={props.recipe.imgUrl} alt="Food" width="200" height="200"/>
            <h2>{props.recipe.food}</h2>
            <h3>Category: {props.recipe.category}</h3>
            <h4>Ingredients</h4>
            <ul>
                <li>{props.recipe.item1}</li>
                <li>{props.recipe.item2}</li>
                <li>{props.recipe.item3}</li>
                <li>{props.recipe.item4}</li>
            </ul>

        </div>
    )
    
}
export default Recipe