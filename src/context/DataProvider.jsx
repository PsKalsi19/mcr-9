/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { initialState } from "./initialState";
import Actions from "./actions";
import { getNotes, getWatchlist, setWatchlist } from "../utils/localstorage-util";

export const DataContext = createContext()


const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.ADD_TO_WATCHLATER:
            return { ...state, watchLater: payload }
        case Actions.ADD_NOTES:
            return { ...state, notes: payload }
        default:
            return state
    }
}

const DataProvider = ({ children }) => {
    const [dataState, dispatchDataState] = useReducer(dataReducer, initialState)

    useEffect(() => {
        const watchlist = getWatchlist()
        const notes=getNotes()
        if (watchlist.length > 0) {
            dispatchDataState({ type: Actions.ADD_TO_WATCHLATER, payload: watchlist })
        }
        if (notes.length > 0) {
            dispatchDataState({ type: Actions.ADD_NOTES, payload: notes })
        }
    }, [])

    const toggleWatchList = (event,video, isWatchlisted) => {
        event.stopPropagation()
        const watchlistData = getWatchlist();
        const newWatchlistData = isWatchlisted
            ? watchlistData.filter(ele => ele._id !== video._id)
            : [...watchlistData, video]
        setWatchlist(newWatchlistData)
        dispatchDataState({ type: Actions.ADD_TO_WATCHLATER, payload: newWatchlistData })
    }

    return (
        <DataContext.Provider value={{ dataState, dispatchDataState, toggleWatchList }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider