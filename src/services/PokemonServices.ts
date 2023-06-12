export const extractPokemonId = (url: string): string => {
    return url.split("pokemon")[1].replace("/","").replace("/","");
}