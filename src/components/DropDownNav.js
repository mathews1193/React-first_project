import React from 'react'
import './stylesheets/DropDownNav.css';

class DropDownNav extends React.Component {
    render(){
         return (
            <div class="dropdown">
              <button class="dropbtn">Power</button>
              <div class="dropdown-content">
                  <a>Profile</a>
                  <a>Setting</a>
                  <a href="#">Log Out</a>
              </div>
          </div>
        )
    }
   
}

export default DropDownNav
