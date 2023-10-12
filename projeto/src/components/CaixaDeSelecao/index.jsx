import React, { useState } from 'react';

import './style.css'

export default function CaixaDeSelecao(props) {
    
    const [opcoes, setOpcoes] = useState(props.options);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    function onChange (event) {
        props.onChange(event.target.value);
        console.log(event.target.value);
    }

    return(
        <div className='container'>
            <label>{props.label}</label>
            <select onChange={onChange}>
                {props.options.map((item, index) => {

                    return(
                        <option key={index}>{item}</option>
                    );

                })}
            </select>
        </div>
    );
}