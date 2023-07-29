import { useContext } from 'react';
import VideoCard from '../components/VideoCard';
import PageHeading from './../components/PageHeading';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
const WatchLater = () => {
    const {dataState:{watchLater}}=useContext(DataContext)
    return (
        <div>
            <PageHeading>
                Watch Later
            </PageHeading>
            {
                watchLater.length===0 && 
                <div className='flex flex-col '>
                <h3 className='text-2xl text-gray-700 py-4 font-bold'>
                    Watchlist is empty. 😞
                </h3>
                    <Link className='bg-gray-900 w-fit shadow-lg rounded-lg text-white px-4 py-2' to="/explore">Explore videos</Link>
                </div>
            }
            
            <div className="flex flex-row flex-wrap">
            {
                watchLater.map(video => <VideoCard key={video._id} video={video} />)
            }

        </div>
        </div>
    );
};

export default WatchLater;