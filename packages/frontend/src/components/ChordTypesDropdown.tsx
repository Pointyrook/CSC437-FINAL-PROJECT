import ChordTypesDropdownOptions from "./ChordTypesDropdownOptions.tsx";
import * as React from "react";
import {DEFAULT_RESULTS} from "./Constants.tsx";

interface IChordTypesDropdownProps {
    category: string;
}

function ChordTypesDropdown(props: IChordTypesDropdownProps) {

    const [hovered, setHovered] = React.useState(false);

    function handleMouseEnter() {
        setHovered(true);
    }

    function handleMouseLeave() {
        setHovered(false);
    }

    const options: string[] = DEFAULT_RESULTS.map((result) => result.name)

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="dropdown-box">
        <button className="main-giant-button">{props.category}</button>
        <ChordTypesDropdownOptions show={hovered} options={options}/>
    </div>
}

export default ChordTypesDropdown;