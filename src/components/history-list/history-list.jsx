import React from 'react';
import './history-list.css'

import CommonButton from '../common-button'


const HistoryList = ({ visibility, clearAll, list }) => {
    let className = 'history-list invisibility';

    if(visibility) {
        className = 'history-list';
    }

    return (
        <div className = {className}>
            <ul>
                {list}
            </ul>
            <CommonButton func = { clearAll } value = { 'Clear' }/>
        </div>   
    );
}

export default HistoryList


