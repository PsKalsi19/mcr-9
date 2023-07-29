/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const PlaylistCard = ({ card }) => {
    const { deletePlaylist } = useContext(DataContext)

    return (
        <div className="relative w-64">
            <XMarkIcon onClick={()=>deletePlaylist(card.id)} className="h-6 w-6 absolute cursor-pointer right-0 text-gray-500" />
            <Link to={`/playlist-items/${card.id}`} className="mx-2 my-4">
                <img className="object-cover w-64 h-48" src={card.items[0].thumbnail??'https://source.unsplash.com/random/900x700/?human'} alt={card.title} />
                <p className="text-gray-700 font-semibold py-4">{card.title}</p>
            </Link>
        </div>
    );
};

export default PlaylistCard;