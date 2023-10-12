import './style.css';

export default function Botao(props) {
    function submit (event) {
        event.preventDefault();
        console.log('Formulário enviado!');
    }
    return(
        <button className={props.cor} >{props.children}</button>
    );
}