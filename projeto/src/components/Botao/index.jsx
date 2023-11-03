import './style.css';

export default function Botao(props) {

    return(
        <button className={props.cor} onClick={props.onClick}>{props.children}</button>
    );
}