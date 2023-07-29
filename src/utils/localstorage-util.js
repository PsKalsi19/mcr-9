const WATCHLIST='watchlist'
const NOTES='notes'
const PLAYLIST='playlists'
export const setWatchlist=(data)=>{
localStorage.setItem(WATCHLIST,JSON.stringify(data))
}

export const getWatchlist=()=>{
    const watchlist=localStorage.getItem(WATCHLIST);
    if(watchlist){
        return JSON.parse(watchlist)
    }
    return []
}
export const setNotes=(data)=>{
localStorage.setItem(NOTES,JSON.stringify(data))
}

export const getNotes=()=>{
    const notes=localStorage.getItem(NOTES);
    if(notes){
        return JSON.parse(notes)
    }
    return []
}

export const setPlaylists=(data)=>{
localStorage.setItem(PLAYLIST,JSON.stringify(data))
}

export const getPlaylists=()=>{
    const playlists=localStorage.getItem(PLAYLIST);
    if(playlists){
        return JSON.parse(playlists)
    }
    return []
}