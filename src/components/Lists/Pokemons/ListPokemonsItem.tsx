import { Pokemon } from '../../../types/ItemCategory';
import { extractPokemonId } from '../../../services/PokemonServices';
import PropTypes from 'prop-types';

interface ListPokemonsItemProps {
    pokemon: Pokemon,
    selectPokemon: (pokemon: Pokemon) => void
}

const ListPokemonsItem = ({ pokemon, selectPokemon }: ListPokemonsItemProps) => 

        <div onClick={() => selectPokemon(pokemon)}>
            <strong>{pokemon.name}</strong>
            <small>#{extractPokemonId(pokemon.url)}</small>
        </div>

ListPokemonsItem.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default ListPokemonsItem;
