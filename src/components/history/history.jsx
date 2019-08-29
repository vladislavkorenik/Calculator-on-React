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
        return (
            <div className = 'history'>
                <CommonButton func = { this.showHistory } value = { 'History' }/>
                <HistoryList visibility = { this.state.visibility } clearAll = { this.props.clearAll } list = { this.props.list }/>
            </div>
        )
    };   
};


