import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


import Buttons from './components/buttons'
import Screen from './components/screen'


const App = () => {
 return (
     <div className = "app">
        <Screen/>
        <Buttons/>
     </div>
 );
};

ReactDOM.render(<App/>, document.getElementById('root'));