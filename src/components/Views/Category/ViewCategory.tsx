import { useContext } from "react";
import { ContextCategories } from "../../../context/ContextCategories";
import ListOfItems from "../../Lists/Items/ListOfItems";

// Documentar
const ViewCategory = () => {
    const { categorySelected } = useContext(ContextCategories);
    if (!categorySelected) return null;

    return (
        <div id="vistaCategoria">
            <h3 className="titulo">Categoria: {categorySelected.name}</h3>
            <ListOfItems category={categorySelected} />
        </div>
    )
};

export default ViewCategory;
