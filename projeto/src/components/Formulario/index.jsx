import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './style.css'

export default function Formulario() {
    //Bloco lógico
    let unidades = [
        'Unidade Centro',
        'Unidade Quitandinha',
        'Unidade Bingen',
        'Unidade Cascatinha',
        'Unidade Itaipava'
    ];
    
    
    let valor = '';
    const [titulo, setTitulo] = useState('Formulário');
  
    function aoDigitar (valorDoFilho) {
        valor = valorDoFilho;
    }
    function clicando () {
        console.log(valor);
        setTitulo(valor);
        console.log(titulo);
    }

    return(
        <section>
            <h1>{`Bom dia, ${titulo}`}</h1>

            <form>
                <CampoTexto 
                    label='Nome' 
                    type='text' 
                    placeholder='Digite seu nome...' 
                    onChange={aoDigitar}
                />
           
                <div className='cx_botoes'>
                    <Botao cor='verde' aoClicar={clicando}>Enviar</Botao>
                </div>
            </form>
        </section>
    );
}