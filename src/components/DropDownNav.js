import React from 'react'
import './stylesheets/DropDownNav.css';

class DropDownNav extends React.Component {
    render(){
         return (
            <div class="dropdown">
              <button class="dropbtn">
                <img src="power.png" alt="power" width="50" height="50"></img>
              </button>
              <div class="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Setting</a>
                  <a href="#">Log Out</a>
              </div>
          </div>
        )
    }
   
}

export default DropDownNav
