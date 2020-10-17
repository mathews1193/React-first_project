import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import Recipe from './components/Recipe';
import RecipeData from './components/RecipeData';
import MyInfor from './components/MyInfor';

class App extends React.Component {

  render(){
     const recipeComponents = RecipeData.map(recipes =>
    <Recipe recipe={recipes}/>)

  return (
    <div>
      <div className="container">
        <NavBar/>
         {/* <div className="recipe-list">
            {recipeComponents} </div>*/}
            <div className="container-todo">
              <MyInfor/> 
            </div>
          
      </div>
        <Footer/>
    </div>
    
   )
  }
 
}

export default App;
