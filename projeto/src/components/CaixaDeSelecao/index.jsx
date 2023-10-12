import './style.css'

export default function CaixaDeSelecao(props) {
    
    return(
        <div className='container'>
            <label>{props.label}</label>
            <select>
                {props.options.map((item) => {

                    return(
                        <option>{item}</option>
                    );

                })}
            </select>
        </div>
    );
}