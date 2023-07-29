import { RocketLaunchIcon,QueueListIcon,HomeIcon,ClockIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col pt-12 space-y-8">
            <NavLink to="/home" className="flex flex-row group">
                <HomeIcon className="h-6 w-6 group-hover:text-blue-500 text-gray-800" />
                <p className="text-gray-800 group-hover:text-blue-500 text-lg xl:text-xl ms-4 font-bold">
                    Home
                </p>
            </NavLink>
            <NavLink to="/explore" className="flex flex-row group">
                <RocketLaunchIcon className="h-6 w-6 group-hover:text-blue-500 text-gray-800" />
                <p className="text-gray-800 group-hover:text-blue-500 text-lg xl:text-xl ms-4 font-bold">
                    Explore
                </p>
            </NavLink>
            <NavLink to="/playlist" className="flex flex-row group">
                <QueueListIcon className="h-6 w-6 group-hover:text-blue-500 text-gray-800" />
                <p className="text-gray-800 group-hover:text-blue-500 text-lg xl:text-xl ms-4 font-bold">
                    Playlist
                </p>
            </NavLink>
            <NavLink to="/watchlater" className="flex flex-row group">
                <ClockIcon className="h-6 w-6 group-hover:text-blue-500 text-gray-800" />
                <p className="text-gray-800 group-hover:text-blue-500 text-lg xl:text-xl ms-4 font-bold">
                    Watch Later
                </p>
            </NavLink>
        </div>
    );
};

export default Sidebar;