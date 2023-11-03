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
    'Unidade Itaipava',
    'Todas as Unidades'
  ];

  const [alunos, setAlunos] = useState([
    { "nome": "Arthur", "url": "https://github.com/arthurGiangiarulo.png", "unidade": "Unidade Centro" },
    { "nome": "Silvia", "url": "https://github.com/SilviaFernandaPereira.png", "unidade": "Unidade Quitandinha" },
    { "nome": "Dani", "url": "https://github.com/DanielleJeanine.png", "unidade": "Unidade Bingen" },
    { "nome": "Roberta", "url": "https://github.com/RobertaTardelli.png", "unidade": "Unidade Quitandinha" },
    { "nome": "Lucas", "url": "https://github.com/Lucas-Carvalho1607.png", "unidade": "Unidade Itamarati" },
    { "nome": "Jonathan", "url": "https://github.com/JonathanReiss.png", "unidade": "Unidade Centro" },
  ]);

  return (
    <div className="App">
      <Formulario alunos={alunos} setAlunos={setAlunos} unidades={unidades} />
      <Lista className='List' alunos={alunos} unidades={unidades} />
    </div>
  );
}

export default App;
