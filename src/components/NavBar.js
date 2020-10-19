import React from 'react';
import DropDownNav from './DropDownNav';
import './stylesheets/NavBar.css';

function signIn(){
    console.log("Signed in")
}

class NavBar extends React.Component{
    
    render(){
        return (
        <nav className='NavBar'>
            <ul className='links'>
                <li className="logo">Sous Chef</li>
                <li className="nav">Home</li>
                <li className="nav">About Us</li>
                <li className="nav">Orders</li>
                <li className="nav">Recipes</li>
                <li className="nav">Contact</li>
                <button className="btn-signup" onClick={signIn}>Sign Up</button>
                <DropDownNav/>
            </ul>
        </nav>
        )
    }
    
}
export default NavBar