import React from 'react';
import './common-button.css'


const CommonButton = ({ func, value }) => {
        return (
            <div className = 'button-container'>
                <button className = 'common-button' onClick = { () => func() }>{ value }</button> 
            </div>
        )
}

export default CommonButton;
