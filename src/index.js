import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'


import Buttons from './components/buttons'
import Screen from './components/screen'


class App extends Component {
    operations = {
        '+': 1, 
        '-': 1, 
        '/': 1,
        '*': 1,
        '%': 1,
        '.': 1
    };

    state = {
        result: '0'
    }
    
    clear = () => {
        this.setState({
            result: '0'
        });
    }

    backspace = () => {
        if(this.state.result === 'NaN' || this.state.result === 'Infinity') {
            this.setState({
                result: '0'
            });
        }
        else {
            this.setState({
                result: this.state.result.length === 1 ? '0' : this.state.result.slice(0, -1)
            });
        }
    }

    writeNum = (item) => {
        if (item in this.operations) {
            this.setState({
                result: this.state.result.indexOf(item) !== -1 ? this.state.result : this.state.result + item
            });
        }
        else {
            this.setState({
                result: this.state.result === '0' ? item : this.state.result + item
            });
        }
    }

    calculation = () => {
        this.setState({
           result: this.state.result.charAt(this.state.result.length - 1) in this.operations ? this.state.result : `${eval(this.state.result)}` 
        });
    }

    radical = () => {
        this.setState({
            result: `${Math.sqrt(this.state.result)}` 
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