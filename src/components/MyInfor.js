import React from 'react';
import "./stylesheets/MyInfor.css";

class MyInfor extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn:true,
    }
}

  render(){
    let result;
    
    if (this.state.isLoggedIn === true){
      result ="in"
    } else {
      result = "out"
    }
    return ( 
           <div className="todo-list">
              <h1>You are currently logged {result}</h1>
          </div>
            )
    }
}
  export default MyInfor