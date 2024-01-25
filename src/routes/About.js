import React from "react";
import './About.css';
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

function About(props){
    const location = useLocation()
    // console.log(location);    
    // console.log(useNavigate());
    console.log(useParams());
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
            </span>
            <span>- George Orwell, 1984</span>
            
        </div>
        
    )

}

export default About;