import React, { useState } from 'react';
import ItemDaLista from '../ItemDaLista';
import CaixaDeSelecao from '../CaixaDeSelecao';
import './style.css';

export default function Lista(props) {
    const [unidade, setUnidade] = useState([props.unidades[0]]);

    return (
        <div className='lista'>
            <CaixaDeSelecao 
                        label='Unidade' 
                        options={props.unidades} 
                        value={unidade}
                        onChange={value => setUnidade(value)}
            />
            <ol>
                {props.alunos.map((aluno, index) => {
                    return (
                        (aluno.unidade === unidade || unidade === 'Todas as Unidades') ?
                        <div>
                            <ItemDaLista aluno={aluno} index={index} />
                        </div>
                        : null
                    )
                })}
            </ol>
        </div>
    )
}