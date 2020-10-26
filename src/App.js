import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import RecipeList from './components/RecipeList';
import MyInfor from './components/MyInfor';

class App extends React.Component {

  render(){

  return (
    <div>
      <div className="container">
        <NavBar/>
            <div className="container-todo">
              <MyInfor/> 
            </div>
              <div className="recipe-list">
                    <RecipeList />
              </div>
      </div>
        <Footer/>
    </div>
    
   )
  }
 
}

export default App;
