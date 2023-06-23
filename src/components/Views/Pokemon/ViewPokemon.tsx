import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/store';

const ViewPokemon = () => {
    
    const { search, loading } = useSelector(( state: AppState ) => state);
    const { name, types, sprites, stats } = search;
    const { other: { home: { front_default } } } = sprites;

    if (loading) return <div>Cargando pokemon...</div>

    return search.name ? (
        <div className='vistaPokemon'>
            <h4>Pokemon: {name.toUpperCase()}</h4>
            <h5>#{search.id}</h5>
            {types.map(({ type: {name} }) => (
                <span className={`typeName ${name}`}>
                    {name.toUpperCase()}
                </span>
            ))}
            <img src={front_default} alt={name} />
            {stats.map(({ stat: {name}, base_stat }) => (
                <p>
                    <span>{name}:</span> 
                    {base_stat}
                </p>
            ))}
        </div>
    ): null
}

export default ViewPokemon;