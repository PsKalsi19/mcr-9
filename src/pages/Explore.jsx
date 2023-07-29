import { useParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import VideoCard from "../components/VideoCard";

const Explore = () => {
    const { category } = useParams()
    const { dataState: { videos } } = useContext(DataContext);
    const [searchTerm,setSearchTerm]=useState('')
    const filteredVideos=()=>{
        if(!category && searchTerm==='') return videos
        let filteredData=videos
        if(category){
            filteredData=videos.filter(ele=>ele.category===category)
        }
        if(searchTerm!==''){
            filteredData=filteredData.filter(ele=>ele.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        return filteredData
    }
    return (
        <div>
            <PageHeading>
                {category ?? 'Explore'}
            </PageHeading>
            <div className="flex w-full">
                <input type="search" 
                className="bg-gray-50 my-4 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5" placeholder="Search branch name..."
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)} />
            </div>
            <div className="flex flex-row justify-between flex-wrap">
            {
                filteredVideos().map(video => <VideoCard key={video._id} video={video} />)
            }

        </div>
        </div>
    );
};

export default Explore;