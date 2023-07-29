import { useContext } from "react";
import PageHeading from "../components/PageHeading";
import { DataContext } from "../context/DataProvider";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PlaylistCard from "../components/PlaylistCard";
import PlaylistPopover from "../components/PlaylistPopover";

const Playlist = () => {
    const { dataState: { playlists } } = useContext(DataContext)
    return (
        <div>
            <PageHeading>
                Playlist
            </PageHeading>
            <div className="flex flex-row">
                {
                    playlists && playlists.map(ele =>
                        <PlaylistCard card={ele} key={ele.id} />
                    )
                }
                <div className="flex items-center justify-center w-40 h-60">
                    <PlaylistPopover selectedVideo={{}}>
                    <PlusCircleIcon className="h-8 w-8 cursor-pointer text-gray-500" />
                    </PlaylistPopover>
                </div>
            </div>

        </div>
    );
};

export default Playlist;