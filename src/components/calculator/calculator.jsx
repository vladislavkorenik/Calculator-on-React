import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import Button from '../button';
import Buttons from '../buttons';
import Screen from '../screen';
import History from '../history';
import CalculatorHeader from '../calculator-header';
import HistoryListItem from '../history-list-item';
import { addHistory, clearHistory } from '../actions';
import './calculator.css';
import isNumeric from "../../logic/isNumeric";


class App extends Component {
    operations = {
        '+': 1, 
        '-': 1, 
        '/': 1,
        '*': 1,
        '%': 1,
        '.': 1
    };

    currentUser = this.props.users[this.props.users.findIndex( el => el.id === this.props.currentId)];
    
    isNaNorInfinity = () => {
        return this.state.result === 'На ноль делить нельзя' ? true : 
        this.state.result === 'Результат не определен' ? true : false;
    };    

    havesign = () => {
        return this.state.result.charAt(this.state.result.length - 1) in this.operations ? true : false
    };

    state = {
        result: '0',
        list: this.currentUser.history.map( item => <HistoryListItem key = {`${ item.value + Math.random() }`} props = { item } />)
    };
    
    clear = () => {
        this.setState({
            result: '0'
        });
    };

    backspace = () => {
        this.setState({
            result: this.isNaNorInfinity() ? '0' :
            this.state.result.length === 1 ? '0' : this.state.result.slice(0, -1)
        });
    };

    writeNum = (item) => {
        if (item in this.operations) {
            this.setState({
                result: this.havesign() ? this.state.result : 
                this.isNaNorInfinity() ? '0' + item : this.state.result + item
            });
        }else {
            this.setState({
                result: this.state.result === '0' ? item : 
                this.isNaNorInfinity() ? item : this.state.result + item 
            });
        };
    };

    writeHistory = (radical) => {
        if(!this.havesign() && isNumeric(Math.sqrt(eval(this.state.result)))) {
            this.currentUser.history.push({ value: radical ? `sqrt(${this.state.result}) = ${Math.sqrt(eval(this.state.result))}` :
            `${this.state.result} = ${eval(this.state.result)}`})
            this.props.addHistory(this.currentUser);
        };    
    };

    clearAll = () => {
        this.currentUser.history = [];
        this.props.clearHistory(this.currentUser);
        this.setState({
           list: this.currentUser.history
        });
    };

    calculation = () => {
        if(!this.isNaNorInfinity()) {
            this.writeHistory(false);
            this.setState({
               result: this.havesign() ? this.state.result : 
               !isFinite(eval(this.state.result)) ? 'На ноль делить нельзя' : `${eval(this.state.result)}`,
               list: this.currentUser.history.map( item => <HistoryListItem key = {`${ item.value + Math.random() }`} props = { item } />)
            });
        };
    };

    radical = () => {
        if(!this.isNaNorInfinity()) {
            this.writeHistory(true);
            this.setState({
                result: this.havesign() ? this.state.result :
                !isFinite(Math.sqrt(eval(this.state.result))) ? 'Результат не определен' : `${Math.sqrt(eval(this.state.result))}`,
                list: this.currentUser.history.map( item => <HistoryListItem key = {`${ item.value + Math.random() }`} props = { item } />)
             });       
        };
    };

    render() {
        return (
            <div className = 'app'>
                <div className = 'calculator-header'>
                    <CalculatorHeader name = { this.currentUser.user }/>
                </div>
                <div className = "calculator">
                    <div className = 'top-nav'>
                        <Link to = '/'><Button props = { { value: 'Назад', classes: 'common-button' } }/></Link>
                        <History clearAll = { this.clearAll } list = { this.state.list }/>
                    </div>
                    <Screen result = { this.state.result }/>
                    <Buttons add = { this.writeNum } clear = { this.clear } backspace = { this.backspace } equal = { this.calculation } radical = { this.radical }/>
                </div>
            </div>
        );
    };  
};


const mapStateToProps = (state) => {
    return {
        currentId: state.currentId,
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearHistory: (currentUser) => {
            dispatch(clearHistory(currentUser));
        },
        addHistory: (currentUser) => {
            dispatch(addHistory(currentUser));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);