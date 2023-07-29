/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import Actions from "./actions";

export const DataContext = createContext()


const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.SELECTED_CATEGORY:
            return { ...state, selectedCategory: payload }
        default:
            return state
    }
}

const DataProvider = ({ children }) => {
    const [dataState, dispatchDataState] = useReducer(dataReducer, initialState)
    return (
        <DataContext.Provider value={{ dataState, dispatchDataState }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider