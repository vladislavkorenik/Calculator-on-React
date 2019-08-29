import React, { Component } from 'react';
import './history-list.css'

import HistoryListItem from '../history-list-item'
import CommonButton from '../common-button'


export default class HistoryList extends Component { 

    state = {
        className: 'history-list invisibility',
        list: [] 
    }
    
    clearAll = () => {
        localStorage.removeItem('arrList');
        this.setState({
           list: [] 
        });
    }

    componentDidMount  = () => {
        let arrList = JSON.parse(localStorage.getItem('arrList')); 
        this.setState({
            list: arrList === null ? [] : arrList.map( item => <HistoryListItem key = { item.value } props = { item } />)
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