import React, {Component} from 'react';


import HistoryButton from '../history-button'
import HistoryList from '../history-list'


export default class History extends Component {
    state = {
        visibility: false
    }

    render() {
        return (
            <div>
                <HistoryButton/>
                <HistoryList/>
            </div>
        )
    }   
};


