import React from 'react';
import './history-list.css'

import HistoryListItem from '../history-list-item'
import CommonButton from '../common-button'


const HistoryList = ({ visibility }) => {
    let className = 'history-list visibility', list = [], arrList = JSON.parse(localStorage.getItem('arrList'));

    if(visibility) {
        className = 'history-list';
    }

    if(arrList !== null) {
        list = arrList.map( item => <HistoryListItem key = { item.value } props = { item } />);
    }

    let clearAll = () => {
        localStorage.clear();
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