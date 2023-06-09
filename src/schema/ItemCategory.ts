export interface Item{
    name: string;
    url: string;
}

export interface Category {
    name: string;
    url: string;
    item: Item[];
}