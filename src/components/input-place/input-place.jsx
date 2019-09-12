import React from 'react';

import isName from "../../logic/isName";
import './input-place.css';

const enterValue = (event) => {
    if(isName(event.target.value)){
        localStorage.setItem('enterValue', event.target.value)
    };
};

const InputPlace = () => {
    return(
        <form className = 'input-place'>
            <input type="text" 
                placeholder = 'Введите имя и фамилию' 
                onChange = { enterValue }
                autoFocus={ true }
            />
        </form>
    );
};

export default InputPlace;