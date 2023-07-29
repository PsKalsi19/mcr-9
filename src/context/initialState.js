import { categories } from "../db/categories";
import { videos } from "../db/videos";

export const initialState={
    categories:categories,
    videos:videos,
    watchLater:[],
    notes:[],
    playlists:[]
}