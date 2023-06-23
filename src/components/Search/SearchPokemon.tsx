import React, { useState } from 'react'
import ListPokemons from '../Lists/Pokemons/ListPokemons'
import ViewPokemon from '../Views/Pokemon/ViewPokemon'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { thunkGetOnePokemon } from '../../thunk/Middleware'

const SearchPokemon: React.FC = () => {
    
    const [name, setName] = useState<string>("");
    const dispatch: AppDispatch = useDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(thunkGetOnePokemon(name))
    }


    return (
        <>
        <form onSubmit={onSubmit}>
            <div id='buscarPokemon'>
                <label>Buscar pokemon</label>
                <input 
                    type="text" 
                    placeholder={"Pikachu, Charmander, Ditto, etc"}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Buscar</button>
            </div>
        </form>
            <div style={{ display: 'flex', flexDirection:'row' }}>
                <ListPokemons />
                <ViewPokemon />
            </div>
        </>
    )
}

export default SearchPokemon