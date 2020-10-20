import React from 'react';
import "./stylesheets/MyInfor.css";

class MyInfor extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn:true,
  }
  this.signIn = this.signIn.bind(this)
  this.signOut = this.signOut.bind(this)
}
  signIn(){
    this.setState({ isLoggedIn:true })
  }

  signOut(){
    this.setState({ isLoggedIn:false })
  }
  render(){
    let result;
    
    if (this.state.isLoggedIn){
      result ="in"
    } else {
      result = "out"
    }
    return ( 
           <div className="todo-list">
             <button className="sign" onClick={this.signIn}>Sign In</button>
             <button className="sign" onClick={this.signOut}>Sign Out</button>
              <h2>You are currently logged {result}</h2>
          </div>
            )
    }
  }
  export default MyInfor