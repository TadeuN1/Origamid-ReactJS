import React from 'react';
import Titulo from './Titulo';
import Gato from './Gato';

const Gatos = () => {
  const gatos = [
    { nome: 'Hope', propriedades: ['Aprox. 3 Anos', '5 KG'] },
    { nome: 'Lua', propriedades: ['Aprox. 1 Ano', '2.5 KG'] },
    { nome: 'Messi', propriedades: ['Aprox. 1 Ano', '3 KG'] },
  ];
  return (
    <section>
      <Titulo texto="Gatos" />
      {gatos.map((gato) => (
        <Gato key={gato.nome} {...gato} />
      ))}
    </section>
  );
};

export default Gatos;
