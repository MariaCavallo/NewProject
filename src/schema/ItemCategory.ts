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
}