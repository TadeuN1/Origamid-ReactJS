import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './UseFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  if (error) return <p>Erro!</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
};

export default App;
