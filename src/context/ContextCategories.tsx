import React, { useReducer } from "react";
import { Category } from "../schema/ItemCategory";

interface Action {
    type: "SELECCIONAR_CATEGORIA";
    payload: {
        category: Category
    }
}

interface State {
    categorySelected: Category | null;
    selectCategory: (category: Category) => void;
}

// Debemos tipar nuestro estado inicial.
const initialState: State = {
    categorySelected: null,
    selectCategory: (category: Category) => {}
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SELECCIONAR_CATEGORIA":
            return {...state, 
                categorySelected: action.payload.category
            }
        default:
            return state;
    }
};

export const ContextCategories = React.createContext<State>(initialState);

const ProviderCategories = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Debemos tipar la siguiente funcion que carga las categorias
    const selectCategory = (category: Category) => {
        dispatch({
            type: 'SELECCIONAR_CATEGORIA',
            payload: {
                category
            },
        });
    };

    return (
        <ContextCategories.Provider
            value={{
                categorySelected: state.categorySelected,
                selectCategory,
            }}
        >
            {children}
        </ContextCategories.Provider>
    );
};

export default ProviderCategories;