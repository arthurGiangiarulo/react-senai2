import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

const [alunos, setAlunos] = useState([
  { "nome": "Arthur", "url": "https://github.com/arthurGiangiarulo.png", "unidade": "Unidade Quitandinha" },
  { "nome": "Marcos Vinícius", "url": "https://github.com/Marcosfullstackk.png", "unidade": "Unidade Centro" },
  { "nome": "Léo Vascaíno", "url": "https://github.com/LeoTeixeira-777.png", "unidade": "Unidade Itamarati" }
]);

function App() {
  return (
    <div className="App">
      <Formulario alunos={alunos} />
      <Lista className='List' alunos={alunos} />
    </div>
  );
}

export default App;
