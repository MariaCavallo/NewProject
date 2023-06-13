import { useQuery } from "@tanstack/react-query";
import { getItemDetalle } from "../../../queries/items.queries";
import PropTypes from "prop-types";
import { Item } from "../../../schema/ItemCategory";


export const extractItemId = (url: string): string => {
    return url.split("item")[1].replace("/","");
}

interface ViewItemProps {
    item: Item,
}

const ViewItem = ({item}: ViewItemProps) => {
    const idItem = extractItemId(item.url);
    const {
        data,
        isLoading,
        isError,
    } = useQuery(["item",idItem], () => getItemDetalle(idItem));

    if (isLoading) return <div>Cargando detalle del item...</div>
    if (isError) return <div>No se pudo cargar el detalle...</div>

    return data ? (
        <div>
            <h4>Item: {item.name}</h4>
            <img src={data.sprites.default} alt={data.name}/>
        </div>
    ): null;
}

ViewItem.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default ViewItem;