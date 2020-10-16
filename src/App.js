import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import Recipe from './components/Recipe';
import RecipeData from './components/RecipeData';
import { render } from '@testing-library/react';

class App extends React.Component {

  render(){
     const recipeComponents = RecipeData.map(recipes =>
    <Recipe recipe={recipes}/>)

  return (
    <div>
      <div className="container">
        <NavBar/>
         {/* <div className="container-todo">
              <MyInfor/> 
            </div> */}
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
