import CampoTexto from '../CampoTexto';
import './style.css'

export default function Formulario() {
    return(
        <section>

            <h1>Formulário</h1>

            <form>
                <CampoTexto 
                    label='Nome' 
                    type='text' 
                    placeholder='Digite seu nome' 
                />
            </form>

        </section>
    );
}