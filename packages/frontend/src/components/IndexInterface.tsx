import NoteSelect from "./NoteSelect.tsx";
import IndexGoButton from "./IndexGoButton.tsx";
import IndexFilter from "./IndexFilter.tsx";
import * as React from "react";

export interface INoteState {
    currentValue: string;
}

export interface IFilterState {
    filterText: string;
    checked: boolean;
}

function IndexInterface() {

    const filters: IFilterState[] = [
        {filterText: "sample filter", checked: false},
        {filterText: "sample filter but with way more text: it's longer", checked: false}
    ];

    const [currentValues, setCurrentValues] = React.useState<INoteState[]>(new Array(7).fill({currentValue: "-"}));
    const [currentFilters, setCurrentFilters] = React.useState<IFilterState[]>(filters);

    console.log("hi i am the state change from IndexInterface");

    function handleNoteSelection(id: number, newNote: string) {
        const updatedValues = [...currentValues];
        updatedValues[id] = {currentValue: newNote}
        setCurrentValues(updatedValues);
    }

    function handleFilterCheck(id: number, newChecked: boolean) {
        console.log(currentFilters);
        const updatedFilters = [...currentFilters];
        updatedFilters[id].checked = newChecked;
        setCurrentFilters(updatedFilters);
    }

    return <div className="interface-box">
        <div className="interface-box-top">
            {currentValues.map((note, i) =>
                <NoteSelect key={i} id={i} currentValue={note.currentValue} onChange={handleNoteSelection} />)}
            <IndexGoButton notes={currentValues} filters={currentFilters} />
        </div>
        <div className="interface-box-bottom">
            {currentFilters.map((filter, i) =>
                <IndexFilter key={i} id={i} filterText={filter.filterText} checked={filter.checked} onChange={handleFilterCheck}></IndexFilter>)}
        </div>
    </div>
}

export default IndexInterface;