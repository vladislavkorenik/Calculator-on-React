import React from 'react';
import './history-list.css'

import Button from '../button'


const HistoryList = ({ visibility, clearAll, list }) => {
    let className = 'history-list invisibility';

    if(visibility) {
        className = 'history-list';
    }

    let item = {
        value: 'Clear',
        func: clearAll,
        classes: 'common-button'
    }; 

    return (
        <div className = {className}>
            <ul>
                {list}
            </ul>
            <div className = 'button-container'>
                <Button props = { item }/>
            </div>    
        </div>   
    );
}

export default HistoryList


