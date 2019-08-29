import React from 'react';
import './history-list.css'

import HistoryListItem from '../history-list-item'


const HistoryList = ({ visibility, arrList }) => {
    let className = 'history-list visibility';

    if(visibility) {
        className = 'history-list';
    }

    let list =  arrList.map( item => <HistoryListItem key = { item.value } props = { item } />);
    return (
        <ul className = {className}>
            {list}
        </ul>
    );
}

export default HistoryList