import { useContext } from "react";
import PageHeading from "../components/PageHeading";
import { DataContext } from "../context/DataProvider";
import PlaylistCard from "../components/PlaylistCard";

const Playlist = () => {
    const { dataState: { playlists } } = useContext(DataContext)
    return (
        <div>
            <PageHeading>
                Playlist
            </PageHeading>
            {
                playlists && playlists.map(ele=>
                    <PlaylistCard card={ele} key={ele.id} />
                )
            }
        </div>
    );
};

export default Playlist;