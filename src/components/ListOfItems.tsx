import { extractCategoriaId } from "./ListCategoriesItem";
import { useQuery } from "@tanstack/react-query";
import { getItemCategory } from "../queries/items.queries";
import PropTypes from "prop-types";
import { Category } from "../schema/ItemCategory";
import ViewItem from "./ViewItem";


interface ListOfItemsProps {
    category: Category
}
// Documentar y agregar tipos
const ListOfItems = ({category}: ListOfItemsProps) => {
    const idCategoria = extractCategoriaId(category.url);
    const {
        data,
        isLoading,
        isError,
    } = useQuery(["itemCategory",idCategoria], () => getItemCategory(idCategoria));

    if (isLoading) return <div>Cargando items...</div>
    if (isError) return <div>No se pudo cargar los items...</div>

    return data ? (
        <div >
            <h4>Items</h4>

            {data.item.map(item =>
                <ViewItem key={item.name} item={item}/>
            )}
        </div>
    ): null;
}

// Incorporar validacion de tipos
ListOfItems.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
}

export default ListOfItems;
