import React from 'react';
import './history-list.css';

import Button from '../button';


const HistoryList = ({ visibility, clearAll, list }) => {
    let className = 'history-list invisibility';

    if(visibility) {
        className = 'history-list';
    };

    return (
        <div className = {className}>
            <ul>
                {list}
            </ul>
            <div className = 'button-container'>
                <Button props = { { value: 'Очистить', classes: 'common-button', func: clearAll } }/>
            </div>    
        </div>   
    );
};

export default HistoryList;


