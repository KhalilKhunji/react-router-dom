import { Link } from 'react-router-dom';

const PokemonList = ({pokemon}) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
          {pokemon.map((currentPokemon) => (
            <li key={currentPokemon.name}>
                <Link to={`/pokemon/${currentPokemon._id}`}>
                    {currentPokemon.name}
                </Link>
            </li>
          ))}
        </ul>
      </>
    );
};
  
export default PokemonList;