/* eslint-disable react/prop-types */
import { Popover } from '@headlessui/react'
import { useContext, useState } from 'react';
import { MdEditNote } from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DataContext } from '../context/DataProvider';
import Actions from '../context/actions';
import { setNotes } from '../utils/localstorage-util';

const NotesPopover = ({ id }) => {
    const [inputText, setInputText] = useState('');
    const { dispatchDataState, dataState: { notes } } = useContext(DataContext)
    const handleFormSubmit = () => {
        const checkItem = notes.find(item => item.id === Number(id))
        let notesData = []
        if (checkItem) {
            const updatedNote = [...checkItem.notes, inputText]
            notesData = notes.map(ele => ele.id === Number(id) ? { ...checkItem, notes: updatedNote } : ele)
        } else {
            notesData = [...notes,{
                id: Number(id),
                notes: [inputText]
            }]
        }
        setNotes(notesData)
        dispatchDataState({ type: Actions.ADD_NOTES, payload: notesData })
        setInputText('')
    }
    return (
        <Popover className="relative">
            <Popover.Button> <MdEditNote className="h-6 w-6 cursor-pointer" />
            </Popover.Button>

            <Popover.Panel className="absolute right-0 w-60 text-gray-600 border-b
       border-gray-600  shadow-sm  bg-gray-50 px-4 py-4 z-10">
                <div className="grid grid-cols-1 gap-y-4 place-items-center">
                    <div className='relative py-2'>
                        <Popover.Button className="left-20 top-0 absolute">
                            <XMarkIcon className="h-6 w-6  text-gray-500" />
                        </Popover.Button>
                    </div>
                    <input
                        type="text"
                        name="note"
                        id="note"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-500 text-gray-700  
               "
                        placeholder="Add note"
                        required={true}
                    />
                    <Popover.Button onClick={handleFormSubmit} type='button' className='bg-blue-500 w-full px-4 py-2 rounded-lg text-white hover:bg-blue-600'>Add New Note</Popover.Button>
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export default NotesPopover