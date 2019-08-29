import React, {Component} from 'react';


import CommonButton from '../common-button'
import HistoryList from '../history-list'


export default class History extends Component {
    state = {
        visibility: false
    };

    showHistory = () => {
        this.setState( state => {
            return {
                visibility: !state.visibility
            };
        });    
    };

    render() {
        localStorage.setItem('visibility', `${this.state.visibility}`);
        return (
            <div className = 'history'>
                <CommonButton func = { this.showHistory } value = { 'History' }/>
                <HistoryList/>
            </div>
        )
    };   
};


