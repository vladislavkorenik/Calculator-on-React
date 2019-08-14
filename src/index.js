import React from 'react';
import ReactDOM from 'react-dom';


const Buttons = () => {
    return (
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>+</button>
            <button>-</button>
            <button>=</button>
            <button>*</button>
            <button>/</button>
            <button>&radic;</button>
        </div>
    );
};


const Screen = () => {
    return (
        <p>d</p>
    );
};


const App = () => {
 return (
     <div>
        <Screen/>
        <Buttons/>
     </div>
 );
};

ReactDOM.render(<App/>, document.getElementById('root'));