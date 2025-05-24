import * as React from "react";
import NoteSelectOption from "./NoteSelectOption.tsx";
import {nanoid} from "nanoid";

interface INoteSelectProps {
    id: number;
    currentValue: string;
    onChange: (key: number, newNote: string) => void;
}

function NoteSelect(props: INoteSelectProps) {

    const defaultOptions =
        ["-", "C", "D", "E", "F", "G", "A", "B"].map((note) =>
            (<NoteSelectOption value={note}
                               key={`note-${nanoid()}`}/>));

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value + " was selected!");
        props.onChange(props.id, e.target.value);
    }

    return <label>
        <select value={props.currentValue} onChange={handleChange} className="button-lift" name="note">
            {defaultOptions}
        </select>
    </label>
}

export default NoteSelect;