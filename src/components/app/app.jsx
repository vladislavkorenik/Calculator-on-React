import React, {Component} from 'react';
import './app.css'

import Buttons from '../buttons'
import Screen from '../screen'
import History from '../history'


export default class App extends Component {
    operations = {
        '+': 1, 
        '-': 1, 
        '/': 1,
        '*': 1,
        '%': 1,
        '.': 1
    };

    arrList = [];
    
    havesign = () => {
        return this.state.result.charAt(this.state.result.length - 1) in this.operations ? true : false
    }

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
            result: this.state.result.length === 1 ? '0' : this.state.result.slice(0, -1)
        });
    }

    writeNum = (item) => {
        if (item in this.operations) {
            this.setState({
                result: this.havesign() ? this.state.result : this.state.result + item
            });
        }
        else {
            this.setState({
                result: this.state.result === '0' ? item : 
                this.state.result === 'На ноль делить нельзя' ? item : 
                this.state.result === 'Результат не определен' ? item : this.state.result + item 
            });
        }
    }

    writeHistory = (text) => {
        if(!this.havesign()) {
            this.arrList.push({ value: text })
            let arrListCopy = JSON.stringify(this.arrList);
            localStorage.setItem('arrList', arrListCopy);
        }    
    }

    calculation = () => {
        this.setState({
           result: this.havesign() ? this.state.result : 
           `${eval(this.state.result)}`  === 'Infinity' ? 'На ноль делить нельзя' : 
           `${eval(this.state.result)}` === 'NaN' ? 'Результат не определен' : `${eval(this.state.result)}`
        });
        this.writeHistory(this.state.result + ' = ' + `${eval(this.state.result)}`);
    }

    radical = () => {
        this.setState({
            result: this.havesign() ? this.state.result : `${Math.sqrt(eval(this.state.result))}`
         });
         this.writeHistory('sqrt(' + this.state.result + ')' + ' = ' + `${Math.sqrt(eval(this.state.result))}`);
    }

    render() {
        return (
            <div className = "app">
                <History/>
                <Screen result = { this.state.result }/>
                <Buttons add = { this.writeNum } clear = { this.clear } backspace = { this.backspace } equal = { this.calculation } radical = { this.radical }/>
            </div>
        );
    }  
}