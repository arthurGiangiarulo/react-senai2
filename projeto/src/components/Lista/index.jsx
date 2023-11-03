import React, { useState } from 'react';
import ItemDaLista from '../ItemDaLista';
import CaixaDeSelecao from '../CaixaDeSelecao';
import './style.css';

export default function Lista(props) {
    const [unidade, setUnidade] = useState('');
    const [alunos, setAlunos] = useState([
        { "nome": "Arthur", "url": "https://github.com/arthurGiangiarulo.png", "unidade": "Unidade Quitandinha" }
    ]);
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
                {alunos.map((aluno, index) => {
                    return (
                        (aluno.unidade === 'Unidade Quitandinha') ?
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