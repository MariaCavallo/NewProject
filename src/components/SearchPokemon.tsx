import React from 'react'
import ListPokemons from './Lists/ListPokemons'
import ViewPokemon from './Views/ViewPokemon'

const SearchPokemon = () => {

    //Aqui deberemos almacenar en estados las entradas del usuario

    const onSearchClick = () => {
        // Aqui debemos guardar la entrada del usuario
    }

    return (
        <>
            <div id='buscarPokemon'>
                <label>Buscar pokemon</label>
                <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} />
                <button onClick={() => onSearchClick()}>
                    Buscar
                </button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListPokemons />
                <ViewPokemon />
            </div>
        </>
    )
}

export default SearchPokemon