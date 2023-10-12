import React, { useState } from 'react';
import Botao from '../Botao';
import CaixaDeSelecao from '../CaixaDeSelecao';
import CampoTexto from '../CampoTexto';
import './style.css'

export default function Formulario() {
    const [nome, setNome] = useState('Arthur');
    const [email, setEmail] = useState('');
    const [unidade, setUnidade] = useState('');
    
    //Bloco lógico
    let unidades = [
        'Unidade Centro',
        'Unidade Quitandinha',
        'Unidade Bingen',
        'Unidade Itamarati',
        'Unidade Itaipava'
    ];
    
    //Comentários
    //A função recebe o evento Javascript como parâmetro
    //O evento é gerado automaticamente quando o usuário clica no botão e é impícito
    //O evento é um objeto que possui várias propriedades e métodos
    //O método preventDefault() cancela o comportamento padrão do evento
    //No caso, o comportamento padrao do evento é enviar o formulário e reccarregar a página
    //Ao utilizar o preventDefault(), a página não é recarregada
    function onSubmit (event) {
        event.preventDefault();
        console.log(`Nome: ${nome}, e-mail: ${email}, unidade: ${unidade}`);
    }

    return(
        <section>
            <h1>Formulário</h1>

            <form onSubmit={onSubmit}>
                <CampoTexto 
                    label='Nome' 
                    type='text' 
                    placeholder='Digite seu nome...' 
                    value={nome}
                    onChange={value => setNome(value)}
                    required={true}
                />
                <CampoTexto 
                    label='e-mail' 
                    type='text' 
                    placeholder='Digite seu email...'
                    value={email}
                    onChange={value => setEmail(value)}
                />
                <CaixaDeSelecao 
                    label='Unidade' 
                    options={unidades} 
                    onChange={value => setUnidade(value)}
                />
                
                <div className='cx_botoes'>
                    <Botao cor='verde'>Enviar</Botao>
                    <Botao cor='cinza'>Cancelar</Botao>
                </div>
            </form>
        </section>
    );
}