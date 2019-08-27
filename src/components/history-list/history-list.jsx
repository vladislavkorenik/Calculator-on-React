import React from 'react';
import './history-list.css'

import HistoryListItem from '../history-list-item'


const HistoryList = () => {
    return (
        <ul className = 'history-list'>
            <HistoryListItem/>
        </ul>
    );
}

export default HistoryList