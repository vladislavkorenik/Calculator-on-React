import React from 'react';
import './history-list.css'

import HistoryListItem from '../history-list-item'


const HistoryList = ({ visibility }) => {
    let className = 'history-list visibility'
    if(visibility) {
        className = 'history-list'
    }
    return (
        <ul className = {className}>
            <HistoryListItem/>
        </ul>
    );
}

export default HistoryList