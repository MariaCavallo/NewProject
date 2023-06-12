import { PokemonSprite, Sprite } from '../../schema/ItemCategory'
import PropTypes from 'prop-types'

const pokemonMock: PokemonSprite = {
    id: 4,
    name: 'Charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    sprites: {
        "default": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        other: {home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png'}}
    } as Sprite
}

const ViewPokemon = () => {
    return pokemonMock ? (
        <div className='vistaPokemon'>
            <h4>Pokemon: {pokemonMock.name}</h4>
            <h5>#{pokemonMock.id}</h5>
            <img 
                src={pokemonMock.sprites.other.home.front_default}
                alt={pokemonMock.name} 
            />
        </div>
    ): null
}

ViewPokemon.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
}

export default ViewPokemon;