import { useEffect } from 'react'
import { Pokemon } from '../../../types/ItemCategory';
import { searchPokemons } from '../../../queries/items.queries';
import ListPokemonsItem from './ListPokemonsItem';
import { extractPokemonId } from '../../../services/PokemonServices';
import { useQuery } from '@tanstack/react-query';

interface List {
    name: string,
    selectPokemon: (pokemon: Pokemon) => void
}

const ListPokemons = ({name, selectPokemon}: List) => {

    const {data, isLoading, refetch} = useQuery(
        ["getPokemons"],
        () => searchPokemons(name)
    ); 
    
    useEffect(() => {
        if (name) {
            refetch();
        }
    }, [name, refetch]);

    if (isLoading) return <div>Cargando pokemons...</div>

    return (
        <div id='listadoCategorias'>
            {data && data.map((pokemon: Pokemon) => (
                <ListPokemonsItem 
                    pokemon={pokemon}
                    selectPokemon={selectPokemon}
                    key={extractPokemonId(pokemon.url)}
                />
            ))}
        </div>
    )
}

export default ListPokemons;