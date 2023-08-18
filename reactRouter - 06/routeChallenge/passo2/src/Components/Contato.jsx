import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" descriptio="Entre em contato" />
      <img src={foto} alt="contato" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>tadeuneres@gmail.com</li>
          <li>(85)9 9876-5432 </li>
          <li>Rua Ali longe, 1852</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
