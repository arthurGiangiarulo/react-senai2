import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {

  let unidades = [
    'Unidade Centro',
    'Unidade Quitandinha',
    'Unidade Bingen',
    'Unidade Itamarati',
    'Unidade Itaipava'
  ];

  const [alunos, setAlunos] = useState([
    { "nome": "Arthur", "url": "https://github.com/arthurGiangiarulo.png", "unidade": "Unidade Centro" }
  ]);

  return (
    <div className="App">
      <Formulario alunos={alunos} setAlunos={setAlunos} unidades={unidades}/>
      <Lista className='List' alunos={alunos} unidades={unidades}/>
    </div>
  );
}

export default App;
