import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';

function Navigation(props) {    
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about" state={true}>About</Link>
        </div>

    );

}

export default Navigation;
