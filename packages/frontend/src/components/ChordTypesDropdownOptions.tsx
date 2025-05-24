import {Link} from "react-router";

interface IChordTypesDropdownOptionProps {
    show: boolean;
    options: string[];
}

function ChordTypesDropdownOptions(props: IChordTypesDropdownOptionProps) {
    return props.show ?
    <div className="dropdown-options-box">
        {props.options.map((option) =>
            <Link to={"/sample-chord/" + option}>{option}</Link>)}
    </div>
        : <></>;
}

export default ChordTypesDropdownOptions;