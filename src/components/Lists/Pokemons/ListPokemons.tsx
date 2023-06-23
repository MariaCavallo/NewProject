import { useEffect } from 'react'
import ListPokemonsItem from './ListPokemonsItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../redux/store';
import { thunkGetPokemons } from '../../../thunk/Middleware';

const ListPokemons = () => {

    const { loading, allPokemon } = useSelector(( state: AppState ) => state);
    const dispatch: AppDispatch = useDispatch();
    
    const fetchPokemon = () => dispatch(thunkGetPokemons());

    useEffect(() => {
        if (allPokemon.length == 0) fetchPokemon();
    }, []);

    if (loading) return <div>Cargando pokemons...</div>

    return (
        <div id='listadoCategorias'>
            <ListPokemonsItem />
        </div>
    );

}

export default ListPokemons;