import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {getItemCategories} from "../../queries/items.queries";
import { Category } from "../../schema/ItemCategory";
import ListCategoriesItem, { extractCategoriaId } from "./ListCategoriesItem";
import { ContextCategories } from "../../context/ContextCategories";

const ListCategories = () => {

    const { selectCategory } = useContext(ContextCategories)

    const {
        data,
        isLoading,
        isError,
    } = useQuery(["itemCategorias"], getItemCategories);

    if (isLoading) return <div>Cargando categorias...</div>
    if (isError) return <div>No se pudo cargar categorias...</div>


    return (
        <div id="listadoCategorias">
            {data && data.map((category: Category) => (
                <ListCategoriesItem 
                    category={category} 
                    selectCategory={selectCategory}
                    key={extractCategoriaId(category.url)}
                />
            ))}
        </div>
    );
}

export default ListCategories;
