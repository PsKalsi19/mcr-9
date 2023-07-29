/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { initialState } from "./initialState";
import Actions from "./actions";
import { getNotes, getPlaylists, getWatchlist, setPlaylists, setWatchlist } from "../utils/localstorage-util";

export const DataContext = createContext()


const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.ADD_TO_WATCHLATER:
            return { ...state, watchLater: payload }
        case Actions.ADD_NOTES:
            return { ...state, notes: payload }
        case Actions.ADD_PLAYLISTS:
            return { ...state, playlists: payload }
        default:
            return state
    }
}

const DataProvider = ({ children }) => {
    const [dataState, dispatchDataState] = useReducer(dataReducer, initialState)
    const {playlists}=dataState
    useEffect(() => {
        const watchlist = getWatchlist()
        const notes=getNotes()
        const playlists=getPlaylists()
        if (watchlist.length > 0) {
            dispatchDataState({ type: Actions.ADD_TO_WATCHLATER, payload: watchlist })
        }
        if (notes.length > 0) {
            dispatchDataState({ type: Actions.ADD_NOTES, payload: notes })
        }
        if (playlists.length > 0) {
            dispatchDataState({ type: Actions.ADD_PLAYLISTS, payload: playlists })
        }
    }, [])

    const deletePlaylist = (id) => {
        const filteredPlaylist = playlists.filter(ele => Number(ele.id) !== Number(id))
        setPlaylists(filteredPlaylist)
        dispatchDataState({ type: Actions.ADD_PLAYLISTS, payload: filteredPlaylist })
    }

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
        <DataContext.Provider value={{ dataState, dispatchDataState,deletePlaylist, toggleWatchList }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider