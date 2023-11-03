import React, { useState } from 'react';
import ItemDaLista from '../ItemDaLista';
import './style.css';

export default function Lista(props) {
    const [alunos, setAlunos] = useState([
        { "nome": "Arthur", "url": "https://github.com/arthurGiangiarulo.png", "unidade": "Unidade Centro" }
    ]);

    return (
        <ol className='lista'>
            {alunos.map((aluno, index) => {
                return (
                    <div>
                        <ItemDaLista aluno={aluno} index={index} />
                    </div>
                )
            })}
        </ol>
    )
}