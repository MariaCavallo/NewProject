import React, { useEffect, useState } from 'react'
import { Pokemon } from '../../schema/ItemCategory';
import { searchPokemons } from '../../queries/items.queries';
import ListPokemonsItem from './ListPokemonsItem';
import { extractPokemonId } from '../../services/PokemonServices';

const ListPokemons = () => {

    const [isLoading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        searchPokemons("").then(data => {
            setLoading(false);
            setPokemons(data);
        });
    }, [])

    if (isLoading) return <div>Cargando pokemons...</div>

    return (
        <div id='listadoCategorias'>
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListPokemonsItem 
                    pokemon={pokemon}
                    selectPokemon={() => {}}
                    key={extractPokemonId(pokemon.url)}
                />
            ))}
        </div>
    )
}

export default ListPokemons;