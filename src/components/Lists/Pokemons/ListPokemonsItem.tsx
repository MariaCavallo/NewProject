import { extractPokemonId } from '../../../services/PokemonServices';
import { AppDispatch, AppState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetOnePokemon } from '../../../thunk/Middleware';

const ListPokemonsItem = () => {

    const useAppDispatch: () => AppDispatch = useDispatch;
    const dispatch = useAppDispatch();
    const data = useSelector((state: AppState) => state.allPokemon[0]);

    return(
        <div>
            {data && data?.map(function(pokemon : { name: string, url: string }){
                return (            
                    <div key={pokemon.name} id='listadoCategorias' onClick={() => dispatch(thunkGetOnePokemon(pokemon?.name))}>
                        <strong>{pokemon.name}</strong>
                        <small>#{extractPokemonId(pokemon?.url)}</small>
                    </div>
                );
            })}
        </div>
    );
}

export default ListPokemonsItem;
