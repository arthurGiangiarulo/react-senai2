import './style.css'
import { useState } from "react";

export default function Contador () {

    const [contador, setContador] = useState (0);

    function incrementar () {
        setContador(contador + 1);
    }

    return(
        <div className="container">
            <button onClick={incrementar}>Clique Aqui</button>
            <h1>{contador}</h1>
        </div>
    );
}