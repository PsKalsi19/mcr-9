const WATCHLIST='watchlist'
const NOTES='notes'
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