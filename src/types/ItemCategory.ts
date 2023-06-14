export interface Item{
    name: string;
    url: string;
}

export interface ItemSprite extends Item {
    sprites: Sprite;
}

export interface Category {
    name: string;
    url: string;
}

export interface CategoryItems extends Category {
    items: Item[];
}

export interface Sprite {
    "default": string;
    other: {
        home: {
            front_default: string;
        };
    }
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonSprite extends Pokemon{
    id: number;
    sprites: Sprite;
}