import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import dog from './img/dog.svg';

const App = () => {
  return (
    <div>
      <p className="fundo"> </p>
      <img src={dog} alt="Doguinho" />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;
