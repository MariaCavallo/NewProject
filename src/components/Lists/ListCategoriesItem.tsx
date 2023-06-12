import PropTypes from "prop-types";
import { Category } from "../schema/ItemCategory";

// Documentar
export const extractCategoriaId = (url: string): string => {
    return url.split("item-category")[1].replace("/","");
}

interface ListCategoriesItemProps {
    category: Category,
    selectCategory: (category: Category) => void
}

// Documentar y Agregar Tipos para las props
const ListCategoriesItem = ({ category, selectCategory }: ListCategoriesItemProps) =>
    <div onClick={() => selectCategory(category)}>
        <strong>{category.name}</strong>
        <small> {category.url}</small>
    </div>


// Agregar prop-types para validar
ListCategoriesItem.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
}

export default ListCategoriesItem;
