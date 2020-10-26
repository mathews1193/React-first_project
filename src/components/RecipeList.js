
import React from 'react';
import Recipe from './Recipe';
import RecipeData from './RecipeData';

class RecipeList extends React.Component {

    constructor(){
        super();
        this.state = {
          recipe:RecipeData
        }
      }
    
    render() {
        const recipeComponents = this.state.recipe.map(recipes =>
        <Recipe recipe={recipes}/>)

        return (
            <div>
                <div className="recipe-list">
                    {recipeComponents} 
                </div>
            </div>
        )
    }
}

export default RecipeList