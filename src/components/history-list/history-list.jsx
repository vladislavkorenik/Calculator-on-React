import React from 'react';
import './history-list.css'

import CommonButton from '../common-button'


export default class HistoryList extends Component { 
    arrList = JSON.parse(localStorage.getItem('arrList')); 

    state = {
        className: 'history-list invisibility',
        list: this.arrList === null ? [] : this.arrList.map( item => <HistoryListItem key = { item.value } props = { item } />) 
    }

    clearAll = () => {
        localStorage.removeItem('arrList');
        this.setState({
           list: [] 
        });
    }
    
    render() {
        return (
            <div className = {  JSON.parse(localStorage.getItem('visibility')) ? 'history-list' : this.state.className }>
                <ul>
                    { this.state.list }
                </ul>
                <CommonButton func = { this.clearAll } value = { 'Clear' }/>
            </div>   
        );
    }; 
};

