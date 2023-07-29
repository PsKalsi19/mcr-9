import { useNavigate } from "react-router-dom";
import { userImage } from "../utils/constants";
import { ClockIcon } from "@heroicons/react/24/solid"
import { ClockIcon as ClockIconOutline } from "@heroicons/react/24/outline"
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { getWatchlist } from "../utils/localstorage-util";
/* eslint-disable react/prop-types */
const VideoCard = ({ video }) => {
    const { _id, thumbnail, creator, views, title, category } = video;
    const { toggleWatchList } = useContext(DataContext)
    const navigate = useNavigate()
    const watchlistData = getWatchlist();
    const isWatchlisted = watchlistData.find(watch => watch._id === _id) ? true : false
    const singleVideoRedirect = () => {
        navigate(`/video/${_id}`)
    }
    return (
        <div onClick={singleVideoRedirect} className="mx-2 my-4">
            <div className="w-64 relative h-48">
                <img className="object-cover w-64 h-48" src={thumbnail} alt={title} />
                <button onClick={(e) => toggleWatchList(e, video, isWatchlisted)} className="h-8 w-8 bg-white ps-2 rounded absolute -right-1 -top-1 ">
                    {isWatchlisted ? <ClockIcon className="h-6 w-6 text-blue-400" /> :
                        <ClockIconOutline className="h-6 w-6 text-blue-400" />}
                </button>
            </div>
            <div className="flex space-x-2">
                <div className="h-10 w-10 mt-2">
                    <img src={userImage} alt="user" className="rounded-full h-10 w-10" />
                </div>
                <div className="mt-2">
                    <p className="text-gray-700 w-52 leading-4 text-ellipsis font-semibold">{title}</p>
                    <p className="text-gray-700 font-semibold">{category}</p>
                    <div className="flex divide-gray-400 divide-x-2">
                        <p className="text-gray-700 pe-2 text-xs font-normal">{views} views</p>
                        <p className="text-gray-700 ps-2 text-xs font-normal">{creator}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;