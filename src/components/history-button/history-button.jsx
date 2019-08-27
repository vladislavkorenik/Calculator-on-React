import React, {Component} from 'react';
import './history-button.css'


const History = ({ showHistory }) => {
        return (
            <div className = 'button-container'>
                <button className = 'history-button' onClick = { () => showHistory() }>History</button> 
            </div>
        )
}

export default History;
