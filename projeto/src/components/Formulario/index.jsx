import React, { useState } from 'react';
import Botao from '../Botao';
import CaixaDeSelecao from '../CaixaDeSelecao';
import CampoTexto from '../CampoTexto';
import './style.css'

export default function Formulario(props) {
    const [nome, setNome] = useState('');
    const [url, setUrl] = useState('');
    const [unidade, setUnidade] = useState(props.unidades[0]);
    const [alunos, setAlunos] = useState([]);
    
    //Comentários
    //A função recebe o evento Javascript como parâmetro
    //O evento é gerado automaticamente quando o usuário clica no botão e é impícito
    //O evento é um objeto que possui várias propriedades e métodos
    //O método preventDefault() cancela o comportamento padrão do evento
    //No caso, o comportamento padrao do evento é enviar o formulário e reccarregar a página
    //Ao utilizar o preventDefault(), a página não é recarregada
    function onSubmit (event) {
        event.preventDefault();
        props.setAlunos([...props.alunos, {nome, url, unidade}]);
        console.log('Aluno cadastrado com sucesso!');
        limpaCampos();
    }
    function limpaCampos () {
        setNome('');
        setUrl('');
        setUnidade('');
    }

    return(
        <section>
            <h1>Formulário</h1>

            <form onSubmit={(event) => onSubmit(event)}>
                <CampoTexto 
                    label='Nome' 
                    type='text' 
                    placeholder='Digite seu nome...' 
                    value={nome}
                    onChange={value => setNome(value)}
                    required={true}
                />
                <CampoTexto 
                    label='Foto' 
                    type='text' 
                    placeholder='Digite a url...'
                    value={url}
                    onChange={value => setUrl(value)}
                />
                <CaixaDeSelecao 
                    label='Unidade' 
                    options={props.unidades} 
                    value={unidade}
                    onChange={value => setUnidade(value)}
                />
                
                <div className='cx_botoes'>
                    <Botao cor='verde'>Enviar</Botao>
                    <Botao cor='cinza' onClick={limpaCampos}>Cancelar</Botao>
                </div>
            </form>
        </section>
    );
}