import { Category, CategoryItems, ItemSprite, Pokemon, PokemonSprite } from "../types/ItemCategory";

export const getItemCategories = async (): Promise<Category[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/item-category/");
    const data = await response.json();
    return data.results;
};

export const getItemCategory = async (categoryId: string): Promise<CategoryItems> => {
    const response = await fetch(`https://pokeapi.co/api/v2/item-category/${categoryId}`);
    const data = await response.json();
    return data;
};

export const getItemDetalle = async (itemId: string): Promise<ItemSprite> => {
    const response = await fetch(`https://pokeapi.co/api/v2/item/${itemId}`);
    const data = await response.json();
    return data;
};

export const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
}

export const searchPokemons = async (pokemonName: string): Promise<Pokemon[]> => {
    const data = await getPokemons();
    return data.filter(pokemon => pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase()));
};

export const getOnePokemon = async (pokemonName: string): Promise<PokemonSprite> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    return await response.json();
    
}