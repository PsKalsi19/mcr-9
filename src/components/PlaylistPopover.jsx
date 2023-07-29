/* eslint-disable react/prop-types */
import { Popover } from '@headlessui/react'
import { useContext, useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DataContext } from '../context/DataProvider';
import Actions from '../context/actions';
import { setPlaylists } from '../utils/localstorage-util';
const formInitialState={
    title: '',
    description: ''
}
const PlaylistPopover = ({ selectedVideo,children }) => {
    const [formData, setFormData] = useState(formInitialState);
    const { dispatchDataState, dataState: { playlists },deletePlaylist } = useContext(DataContext)
    const onDataChange = (e) => {
        setFormData((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }
    const createNewPlaylist = () => {
        const playlistData = {
            id: playlists.length + 1,
            ...formData,
            items: [selectedVideo]
        }
        setPlaylists([...playlists, playlistData])
        dispatchDataState({ type: Actions.ADD_PLAYLISTS, payload: [...playlists, playlistData] })
        setFormData(formInitialState)
    }

   

    const addToPlaylist=(id)=>{
        const updatedPlaylist = playlists.map(ele => Number(ele.id) === Number(id)? {...ele,items:[...ele.items,selectedVideo]}:ele )
        setPlaylists(updatedPlaylist)
        dispatchDataState({ type: Actions.ADD_PLAYLISTS, payload: updatedPlaylist })
    }
    return (
        <Popover className="relative">
            <Popover.Button>
                {children}
            </Popover.Button>

            <Popover.Panel className="absolute right-0 w-60 text-gray-600 border-b
       border-gray-600  shadow-sm  bg-gray-50 px-4 py-4 z-10">
                <div className="grid grid-cols-1 gap-y-4 place-items-center">

                    <h3 className='text-gray-800 font-semibold text-xl'>Add to Playlist</h3>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={onDataChange}
                        className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-500 text-gray-700  
               "
                        placeholder="Add Title"

                    />
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={onDataChange}
                        className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-500 text-gray-700  
               "
                        placeholder="Add Description"

                    />
                    <Popover.Button onClick={createNewPlaylist} type='button' className='bg-blue-500 w-full px-4 py-2 rounded-lg text-white hover:bg-blue-600'>Create new Playlist</Popover.Button>
                </div>
                {
                    playlists && playlists.length > 0 && playlists.map(ele =>
                        <div key={ele.id} className="flex justify-between py-2">
                            <Popover.Button onClick={()=>addToPlaylist(ele.id)} type='button' >
                                {ele.title}
                            </Popover.Button>
                            <XMarkIcon onClick={() => deletePlaylist(ele.id)} className='h-6 w-6 text-gray-600' />
                        </div>
                    )
                }
            </Popover.Panel>
        </Popover>
    )
}

export default PlaylistPopover