import React from 'react';


const Button = ({props}) => {
    const { label, btnStyle, action, eventBtn } = props;
    return (
        <button type='button' className={btnStyle} onClick={() => eventBtn(label, action)}>{ label }</button>   
    );
};


export default Button;  