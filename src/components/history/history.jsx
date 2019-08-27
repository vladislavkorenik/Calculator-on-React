import React, {Component} from 'react';


import HistoryButton from '../history-button'
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
            <div>
                <HistoryButton showHistory = { this.showHistory }/>
                <HistoryList visibility = { this.state.visibility }/>
            </div>
        )
    };   
};


