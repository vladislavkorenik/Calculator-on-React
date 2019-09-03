import React, {Component} from 'react';
import './calculator.css'

import Button from '../button'
import Buttons from '../buttons'
import Screen from '../screen'
import History from '../history'
import HistoryListItem from '../history-list-item'
import { Link } from 'react-router-dom'


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
        result: '0',
        list: JSON.parse(localStorage.getItem('arrList')) === null ? [] :
        JSON.parse(localStorage.getItem('arrList')).map( item => <HistoryListItem key = { item.value } props = { item } />)
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

    writeHistory = (radical) => {
        if(!this.havesign()) {
            this.arrList.push({ value: radical ? `sqrt(${this.state.result}) = ${Math.sqrt(eval(this.state.result))}` :
            `${this.state.result} = ${eval(this.state.result)}`})
            localStorage.setItem('arrList', JSON.stringify(this.arrList));
        }    
    }


    clearAll = () => {
        localStorage.removeItem('arrList');
        this.setState({
           list: [] 
        });
    }
    

    calculation = () => {
        this.writeHistory(false);
        this.setState({
           result: this.havesign() ? this.state.result : 
           `${eval(this.state.result)}`  === 'Infinity' ? 'На ноль делить нельзя' : 
           `${eval(this.state.result)}` === 'NaN' ? 'Результат не определен' : `${eval(this.state.result)}`,
           list: JSON.parse(localStorage.getItem('arrList')) === null ? [] :
           JSON.parse(localStorage.getItem('arrList')).map( item => <HistoryListItem key = { item.value } props = { item } />)
        });
    }

    radical = () => {
        this.writeHistory(true);
        this.setState({
            result: this.havesign() ? this.state.result :
            `${Math.sqrt(eval(this.state.result))}` === 'NaN' ? 'Результат не определен' :
            `${Math.sqrt(eval(this.state.result))}`,
            list: JSON.parse(localStorage.getItem('arrList')) === null ? [] :
            JSON.parse(localStorage.getItem('arrList')).map( item => <HistoryListItem key = { item.value } props = { item } />)
         });       
    }

    render() {
        return (
            <div className = "app">
                <div className = 'top-nav'>
                    <Link to = '/'><Button props = { { value: 'Back', classes: 'common-button' } }/></Link>
                    <History clearAll = { this.clearAll } list = { this.state.list }/>
                </div>
                <Screen result = { this.state.result }/>
                <Buttons add = { this.writeNum } clear = { this.clear } backspace = { this.backspace } equal = { this.calculation } radical = { this.radical }/>
            </div>
        );
    }  
}