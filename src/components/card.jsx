import React from 'react';
import './card.css';


export default function Card(props) {
    
    const getColor = () =>{
        if(props.red) return "Red"
        if(props.green) return "Green"
        if(props.blue) return "Blue"
        if(props.purple) return "Purple"
        return ""

    }
    
    
    return(
        <div className={`Card ${getColor()}`}>
            <div  className="Header">
                <span className="Title">
                    {props.title}
                </span>
            </div>
            <div  className="Content">
                {props.children}
            </div>
        </div>
    )
}