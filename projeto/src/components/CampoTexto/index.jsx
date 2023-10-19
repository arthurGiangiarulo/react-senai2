import './style.css';

export default function CampoTexto(props) {

    function digitando (event) {
        let valor = event.target.value;
        props.onChange(valor);
    }

    return(
        <div className='container'>
            <label>{props.label}</label>
            <input
                type={props.type} 
                placeholder={props.placeholder}
                required={props.required} 
                onChange={digitando}
            />
        </div>
    );
}