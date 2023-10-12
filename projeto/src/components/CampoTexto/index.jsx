import React, { useState } from 'react';
import './style.css';

export default function CampoTexto(props) {
    
    function onChange (event) {
        props.onChange(event.target.value);
    }

    return(
        <div className='container'>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                required={props.required} 
                value={props.value}
                onChange={onChange}
            />
        </div>
    );
} 