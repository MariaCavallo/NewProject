export interface Item{
    name: string;
    url: string;
}

export interface ItemSprite extends Item {
    sprites: Sprites;
}

export interface Category {
    name: string;
    url: string;
}

export interface CategoryItems extends Category {
    items: Item[];
}

interface Sprites {
    other: { home: { front_default: string }};
}

export interface Pokemon {
    name: string;
    url: string;
    id: number;
    sprites: Sprites;
    types: Types[];
    stats: Stats[];
}

export interface PokemonSprite extends Pokemon{
    id: number;
    sprites: Sprites;
}

interface Types {
    type: { name: string }
}

interface Stats {
    base_stat: number;
    stat: { name: string };
}

export interface PokemonState {
    search: Pokemon;
    allPokemon: any[];
    loading: boolean;
}