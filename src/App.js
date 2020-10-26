import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import RecipeList from './components/RecipeList';
import MyInfor from './components/MyInfor';
import Home from './components/Home';

class App extends React.Component {

  render(){

  return (
    <div>
      <div className="container">
        <NavBar/>
          <Router>
            <Switch>
            <Route exact path="/">
                    <Home />
              </Route>
               <Route exact path="/myinfor">
                <div className="container-todo">
                  <MyInfor/> 
                </div>
              </Route>
              <Route exact path="/recipe">
              <div className="recipe-list">
                    <RecipeList />
              </div>
              </Route>
            </Switch>
          </Router>
      </div>
        <Footer/>
    </div>
    
   )
  }
 
}

export default App;
