import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();

    return () => {
    
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Dados Carregados:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}

export default MyComponent;
