import { CgPlayListAdd } from "react-icons/cg";
import { ClockIcon } from "@heroicons/react/24/solid"
import { ClockIcon as ClockIconOutline } from "@heroicons/react/24/outline"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import SingleVideoCard from "../components/SingleVideoCard";
import { userImage } from "../utils/constants";
import {  getWatchlist } from "../utils/localstorage-util";
import NotesPopover from "../components/NotesPopover";
import NotesList from "../components/NotesList";
import PlaylistPopover from "../components/PlaylistPopover";

const Video = () => {
    const { id } = useParams()
    const [selectedVideo, setSelectedVideo] = useState(null)
    const { dataState: { videos, notes }, toggleWatchList } = useContext(DataContext);
    const watchlistData = getWatchlist();
    const isWatchlisted = watchlistData.find(watch => watch._id === Number(id)) ? true : false
    useEffect(() => {
        if (id) {
            setSelectedVideo(videos.find(ele => ele._id === Number(id)))
        }
    }, [id, videos])

    const selectedVideoNotes = notes.find(note => note.id === Number(id))
    return (
        <div className="flex flex-row space-x-4">
            <div className="w-8/12 flex flex-col">
                <iframe className="w-full" height="400"
                    src={selectedVideo?.src}>
                </iframe>
                <div className="flex my-4 items-center border-b border-gray-600 pb-4 justify-between space-x-4 flex-row">
                    <div className="flex items-center space-x-4">
                        <img src={userImage} alt="user" className="h-12 w-12 rounded-full" />
                        <p className="text-lg font-semibold text-gray-900">{selectedVideo?.title}</p>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <button onClick={(e) => toggleWatchList(e, selectedVideo, isWatchlisted)}>
                            {isWatchlisted ? <ClockIcon className="h-6 w-6 " /> :
                                <ClockIconOutline className="h-6 w-6 " />}
                        </button>
                        <PlaylistPopover selectedVideo={selectedVideo} /> 
                        <NotesPopover prevNotes={selectedVideoNotes} id={id} />
                    </div>
                </div>
                <h3 className="text-gray-800 mt-8 mb-4 font-semibold text-xl">
                    My Notes
                </h3>
                {selectedVideoNotes && <NotesList selectedNotes={selectedVideoNotes} />}
            </div>
            <div className="w-4/12">
                <h4 className="text-gray-700 font-bold mb-2 text-2xl">More Videos:</h4>
                <div className=" min-h-[80vh] overflow-y-scroll h-[80vh] flex flex-col space-y-2">
                    {
                        videos && videos.length > 0 && videos.filter(video => video._id !== Number(id)).map(ele => <SingleVideoCard key={ele._id} data={ele} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Video;