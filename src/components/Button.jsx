import React, { Component } from 'react';


const Button=(props)=> {
    return (
        <button className={'btn'} onClick={props.funcpencet} >
            {props.children}
        </button>  
    )
}

export default Button