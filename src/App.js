import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import Recipe from './components/Recipe';
import RecipeData from './components/RecipeData';
import MyInfor from './components/MyInfor';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      recipe:RecipeData
    }
  }
  render(){
     const recipeComponents = this.state.recipe.map(recipes =>
    <Recipe recipe={recipes}/>)

  return (
    <div>
      <div className="container">
        <NavBar/>
         {/* */}
            <div className="container-todo">
              <MyInfor/> 
            </div>
          <div className="recipe-list">
            {recipeComponents} 
          </div>
      </div>
        <Footer/>
    </div>
    
   )
  }
 
}

export default App;
