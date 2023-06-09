import { Category, CategoryItems, ItemSprite } from "../schema/ItemCategory";

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