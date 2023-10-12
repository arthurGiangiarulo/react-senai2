import './style.css';

export default function Botao(props) {

    return(
        <button className={props.cor} >{props.children}</button>
    );
}