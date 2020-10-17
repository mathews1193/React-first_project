import React from 'react'
import './stylesheets/Footer.css';

class Footer extends React.Component {
    
    render(){
        const name = "Sous Chef";
        const owner = "Donald Mathews";

    return(
        <footer className="bottom">
            <p className='message'>@2020 {name} by Owner: {owner}</p>
        </footer>
        )
    }
    
}

export default Footer