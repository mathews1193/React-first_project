import React from 'react';
import "./stylesheets/MyInfor.css";

class MyInfor extends React.Component {

  render(){
    return ( 
           <div className="todo-list">
              <input type='checkbox'/>
              <p>Pick Your Protein</p>

              <input type='checkbox'/>
              <p>Pick Your Veggies</p>
              
              <input type='checkbox'/>
              <p>Save Your Recipes</p>
              
              <input type='checkbox'/>
              <p>Place Your Order</p>
          </div>
            )
    }
}
  export default MyInfor