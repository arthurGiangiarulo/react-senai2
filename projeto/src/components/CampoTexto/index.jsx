import './style.css';

export default function CampoTexto(props) {
    return(
        <div className='container'>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
            />
        </div>
    );
}