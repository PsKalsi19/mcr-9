import { Link } from "react-router-dom";
import { userImage } from "../utils/constants";

/* eslint-disable react/prop-types */
const VideoCard = ({ video }) => {
    const { thumbnail, creator, views, title, category } = video
    return (
        <Link className=" my-4">
            <img className="object-cover w-64 h-48" src={thumbnail} alt={title} />
            <div className="flex space-x-2">
                <div className="w-2/12 mt-2">
                    <img src={userImage} alt="user" className="rounded-full h-10 w-10" />
                </div>
                <div className="w-10/12 mt-2">
                    <p className="text-gray-700 w-52 leading-4 text-ellipsis font-semibold">{title}</p>
                    <p className="text-gray-700 font-semibold">{category}</p>
                    <div className="flex divide-gray-400 divide-x-2">
                        <p className="text-gray-700 pe-2 text-xs font-normal">{views} views</p>
                        <p className="text-gray-700 ps-2 text-xs font-normal">{creator}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;