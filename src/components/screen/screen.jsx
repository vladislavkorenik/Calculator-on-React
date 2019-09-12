import React from 'react';
import './screen.css';


const Screen = ({ result }) => {
    return (
        <div className = 'screen'>
            <p >{ result }</p>
        </div>      
    );
};


export default Screen;