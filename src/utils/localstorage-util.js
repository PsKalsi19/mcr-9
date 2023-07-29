const WATCHLIST='watchlist'

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

