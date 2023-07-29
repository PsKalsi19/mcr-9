/* eslint-disable react/prop-types */
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { setNotes } from "../utils/localstorage-util";
import Actions from "../context/actions";

const NotesList = ({ selectedNotes }) => {
    const { dispatchDataState, dataState: { notes } } = useContext(DataContext)

    const handleDelete = (index) => {
        const filteredArr=selectedNotes.notes.filter((ele, i) => Number(i) !== Number(index))
        const updatedData=(notes.map(ele=>Number(ele.id)===Number(selectedNotes.id)?{...ele,notes:filteredArr}:ele))
        setNotes(updatedData)
        dispatchDataState({ type: Actions.ADD_NOTES, payload: updatedData })
    }
    return (
        <div>
            <h3 className="text-gray-800 mt-8 mb-4 font-semibold text-xl">
                My Notes
            </h3>
            <div className="flex w-full flex-col">
                {
                    selectedNotes?.notes.map((ele, index) => <div key={index} className="flex w-full justify-between flex-row">
                        <p className="8/12 text-lg font-normal text-gray-700">{ele}</p>
                        <div className="4/12 flex flex-row space-x-8 justify-between">
                            <PencilIcon className="h-6 w-6 text-gray-700" />
                            <TrashIcon onClick={() => handleDelete(index)} className="h-6 w-6 text-gray-700" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NotesList;