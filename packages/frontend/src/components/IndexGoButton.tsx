import {useNavigate} from "react-router";
import type { INoteState, IFilterState } from "./IndexInterface.tsx";

interface IIndexGoButtonProps {
    notes: INoteState[];
    filters: IFilterState[];
}

function IndexGoButton(props: IIndexGoButtonProps) {

    let validNotes = "";
    props.notes.map((note) => {
        if (note.currentValue !== "-") {
            validNotes = validNotes + note.currentValue;
        }
    });

    const validFilters: string[] = []
    props.filters.map((filter) => {
        if (filter.checked) validFilters.push(filter.filterText);
    });

    let searchParamFilters = "";
    validFilters.forEach((filter) => searchParamFilters += `&filter=${filter}`);

    const navigate = useNavigate();

    function handleClick() {
        if (validNotes) navigate({pathname: "/sample-search", search: `?sort=${validNotes}${searchParamFilters}`});
    }

    return <label>
        <button onClick={handleClick} className="go-button button-lift">GO!</button>
    </label>
}

export default IndexGoButton;