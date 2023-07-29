/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleVideoCard = ({data}) => {
    const {thumbnail,title,creator,_id}=data
    return (
        <Link to={`/video/${_id}`} className="flex space-x-4 group hover:bg-gray-100">
            <img src={thumbnail} alt={title} className="object-cover w-1/2"/>
           <div className="flex flex-col group-hover:text-blue-500 text-blue-600">
            <p className="text-sm font-normal">{title}</p>
            <p className="text-xs text-blue-400 font-normal">{creator}</p>
           </div>
        </Link>
    );
};

export default SingleVideoCard;