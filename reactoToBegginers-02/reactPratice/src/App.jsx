import React from 'react';
import Header from './Header';
import Home from './Home';
import Gatos from './Gatos';

const App = () => {
  const { pathname } = window.location;
  let Component;

  if (pathname === '/gatos') {
    Component = Gatos;
  } else {
    Component = Home;
  }
  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};
export default App;
