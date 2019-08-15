import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'


import Buttons from './components/buttons'
import Screen from './components/screen'


class App extends Component {
    state = {
        result: '0'
    }
    
    clear = () => {
        this.setState({
            result: '0'
        });
    };

    writeNum = (item) => {
        this.setState({
            result: this.state.result == '0' ? item : this.state.result + item
        });
    }
    render () {
        return (
            <div className = "app">
                <Screen result = { this.state.result }/>
                <Buttons add = { this.writeNum } clear = { this.clear }/>
            </div>
        );
    }  
}

ReactDOM.render(<App/>, document.getElementById('root'));