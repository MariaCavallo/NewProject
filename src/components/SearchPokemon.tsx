import { FC, useState } from 'react'
import ListPokemons from './Lists/Pokemons/ListPokemons'
import ViewPokemon from './Views/Pokemon/ViewPokemon'
import { Pokemon } from '../schema/ItemCategory'

const SearchPokemon: FC = () => {
    
    const [text, setText] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null)

    const onSearchClick = () => {
        setName(text)
    }

    const onSelectPokemon = (pokemon: Pokemon) => {
        setPokemonSelected(pokemon)
    }

    return (
        <>
            <div id='buscarPokemon'>
                <label>Buscar pokemon</label>
                <input 
                    type="text" 
                    placeholder={"Pikachu, Charmander, Ditto, etc"}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => onSearchClick()}>
                    Buscar
                </button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListPokemons 
                    name={name || text}
                    selectPokemon={onSelectPokemon}
                />
                <ViewPokemon 
                    pokemonSelected={pokemonSelected}
                />
            </div>
        </>
    )
}

export default SearchPokemon