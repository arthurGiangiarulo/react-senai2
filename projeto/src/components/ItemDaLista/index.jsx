import React, { useState } from 'react';
import './style.css';

export default function ItemDaLista(props) {

    return (
        <li className='aluno' key={props.index}>
            <img className='aluno_img' src={props.aluno.url} alt={props.aluno.nome} />
            <p className='aluno_nome'>{props.aluno.nome}</p>
            <p className='aluno_unidade'>{props.aluno.unidade}</p>
        </li>
    );
}