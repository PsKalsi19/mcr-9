/* eslint-disable react/prop-types */
import {  TrashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { setNotes } from "../utils/localstorage-util";
import Actions from "../context/actions";
import EditNotePopover from "./EditNotePopover";

const NotesList = ({ selectedNotes }) => {
    const { dispatchDataState, dataState: { notes } } = useContext(DataContext)
    const handleDelete = (index) => {
        const filteredArr = selectedNotes.notes.filter((ele, i) => Number(i) !== Number(index))
        const updatedData = (notes.map(ele => Number(ele.id) === Number(selectedNotes.id) ? { ...ele, notes: filteredArr } : ele))
        setNotes(updatedData)
        dispatchDataState({ type: Actions.ADD_NOTES, payload: updatedData })
    }
    const editNote = (updatedText,selectedIndex) => {
        const updatedNotes = selectedNotes.notes.map((ele, i) => Number(i) === Number(selectedIndex)?updatedText:ele)
        const updatedData = (notes.map(ele => Number(ele.id) === Number(selectedNotes.id) ? { ...ele, notes: updatedNotes } : ele))
        setNotes(updatedData)
        dispatchDataState({ type: Actions.ADD_NOTES, payload: updatedData })
    }
    return (
        <div>

            <div className="flex w-full flex-col">
                {
                    selectedNotes?.notes.map((ele, index) => <div key={index} className="flex w-full justify-between flex-row">
                        <p className="8/12 text-lg font-normal text-gray-700">{ele}</p>
                        <div className="4/12 flex flex-row space-x-8 justify-between">
                            <EditNotePopover editNote={editNote} selectedIndex={index} oldText={ele} />
                            <TrashIcon onClick={() => handleDelete(index)} className="h-6 w-6 text-gray-700" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NotesList;