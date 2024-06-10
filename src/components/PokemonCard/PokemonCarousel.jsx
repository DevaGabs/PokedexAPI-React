import React from 'react';
import ReactDOM from 'react-dom';
import { PokemonCarousel } from './components/PokemonCarousel'; 

function App() {
  return (
    <div>
      <h1>My Pokémon Carousel</h1>
      <PokemonCarousel />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
