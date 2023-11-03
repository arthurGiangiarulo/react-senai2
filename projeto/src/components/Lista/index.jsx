import React, { useState } from 'react';
import ItemDaLista from '../ItemDaLista';
import CaixaDeSelecao from '../CaixaDeSelecao';
import './style.css';

export default function Lista(props) {
    const [unidade, setUnidade] = useState('');
    
    let unidades = [
        'Unidade Centro',
        'Unidade Quitandinha',
        'Unidade Bingen',
        'Unidade Itamarati',
        'Unidade Itaipava'
    ];

    return (
        <div className='lista'>
            <CaixaDeSelecao 
                        label='Unidade' 
                        options={unidades} 
                        onChange={value => setUnidade(value)}
            />
            <ol>
                {props.alunos.map((aluno, index) => {
                    return (
                            <ItemDaLista aluno={aluno} index={index} />
                    )
                })}
            </ol>
        </div>
    )
}