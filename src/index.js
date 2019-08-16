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
    }

    backspace = () => {
        this.setState({
            result: this.state.result.length == 1 ? '0' : this.state.result.slice(0, -1)
        });
    }

    writeNum = (item) => {
        this.setState({
            result: this.state.result == '0' ? item : this.state.result + item
        });
    }

    calculation = () => {
        this.setState({
           result: eval(this.state.result) 
        });
    }

    radical = () => {
        this.setState({
            result: Math.sqrt(this.state.result) 
         });
    }

    render () {
        return (
            <div className = "app">
                <Screen result = { this.state.result }/>
                <Buttons add = { this.writeNum } clear = { this.clear } backspace = { this.backspace } equal = { this.calculation } radical = { this.radical }/>
            </div>
        );
    }  
}

ReactDOM.render(<App/>, document.getElementById('root'));