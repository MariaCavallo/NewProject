import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pokemon } from '../../../schema/ItemCategory'
import PropTypes from 'prop-types'
import { getOnePokemon } from '../../../queries/items.queries'

interface View {
    pokemonSelected: Pokemon | null
}

const ViewPokemon = ({pokemonSelected}: View) => {
    
    const {data: pokemon, isLoading, refetch} = useQuery(["getPokemon"], () => getOnePokemon(pokemonSelected?.name || ""));
    
    useEffect(() => {
        if(pokemonSelected) {
            refetch();
        }
    }, [refetch, pokemonSelected])

    if (!pokemonSelected) return <></>
    if (isLoading) return <div>Cargando pokemon...</div>

    return pokemon ? (
        <div className='vistaPokemon'>
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <img 
                src={pokemon.sprites.other.home.front_default}
                alt={pokemon.name} 
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