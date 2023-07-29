import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PrimaryLayout = () => {
    return (
        <div className="mx-16 my-16">
            <div className="flex flex-row space-x-8">
                <div className="w-2/12 h-full">
                    <Sidebar />
                </div>
                <div className="w-10/12 h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrimaryLayout;