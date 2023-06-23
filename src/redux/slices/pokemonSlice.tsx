import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon, PokemonState } from '../../types/ItemCategory'
import { thunkGetOnePokemon, thunkGetPokemons } from '../../thunk/Middleware';

let other = { home: { front_default: "" } };
let stats = { base_stat: 0, stat: { name: "" } };
let type = { type: { name: "" } };

const initialState: PokemonState = {
    search: {impor
        name: "",
        url: "",
        id: 0,
        sprites: {other},
        stats: [stats],
        types: [type]
    },
    allPokemon: [],
    loading: false,
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(
                thunkGetPokemons.fulfilled,
                (state, action: PayloadAction<Pokemon[]>) => {
                    state.allPokemon.push(action.payload);
                    state.loading = false;
                }
            )
            .addCase(thunkGetPokemons.pending, (state, _action) => { state.loading = false; })
            .addCase(
                thunkGetOnePokemon.fulfilled,
                (state, action: PayloadAction<Pokemon>) => {
                    state.search = action.payload;
                }
            );
    },
});

export default pokemonSlice.reducer