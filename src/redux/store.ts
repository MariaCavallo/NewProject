import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/pokemonSlice';

export const store = configureStore({
    reducer: pokemonSlice
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;