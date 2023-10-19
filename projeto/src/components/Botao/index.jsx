import './style.css';

export default function Botao(props) {
    
    function aoClicar(event){
        event.preventDefault();
        props.aoClicar();
    }

    return(
        <button className={props.cor} onClick={aoClicar}> {props.children} </button>
    );
}

