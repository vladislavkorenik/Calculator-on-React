import React from 'react';
import './history-list-item.css'

const HistoryListItem = ({ props:{ value } }) => {
    return (
        <li className='history-list-item'>{ value }</li>
    );
}

export default HistoryListItem