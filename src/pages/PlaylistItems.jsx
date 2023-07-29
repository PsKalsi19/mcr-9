import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import VideoCard from "../components/VideoCard";

const PlaylistItems = () => {
    const { id } = useParams()
    const { dataState: { playlists } } = useContext(DataContext)
    const selectedPlaylist=playlists.find(ele=>Number(ele.id)===Number(id))
    return (
        <div className="flex flex-row ">
            {
              playlists && playlists.length>0 && selectedPlaylist.items.map(item => <VideoCard video={item} key={item._id} />)
            }
        </div>
    );
};

export default PlaylistItems;