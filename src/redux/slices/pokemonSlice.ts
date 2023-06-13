import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PokemonsState {
    search: string;
}

const initialState: PokemonsState = {
    search: '',
}

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        searchPokemon: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        }
    }
})

export const { searchPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer