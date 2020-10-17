import React from 'react';
import './stylesheets/NavBar.css';

class NavBar extends React.Component{
    
    render(){
        return (
        <nav className='NavBar'>
            <ul className='links'>
                <li className="nav">Sous Chef</li>
                <li className="nav">Home</li>
                <li className="nav">About Us</li>
                <li className="nav">New Orders</li>
                <li className="nav">Recipes</li>
                <li className="nav">Contact</li>
                <li className="btn-signup">Sign Up</li>
            </ul>
        </nav>
        )
    }
    
}
export default NavBar