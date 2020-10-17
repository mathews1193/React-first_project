import React from "react";
import './stylesheets/Recipes.css';

class Recipe extends React.Component {

    constructor(){
        super();
    }
    render(){
        return(
        <div className="recipe">
            <img src={this.props.recipe.imgUrl} alt="Food" width="200" height="200"/>
            <h2>{this.props.recipe.food}</h2>
            <h3>Category: {this.props.recipe.category}</h3>
            <h4>Ingredients</h4>
            <ul>
                <li>{this.props.recipe.item1}</li>
                <li>{this.props.recipe.item2}</li>
                <li>{this.props.recipe.item3}</li>
                <li>{this.props.recipe.item4}</li>
            </ul>

        </div>
        )
    } 
}
export default Recipe