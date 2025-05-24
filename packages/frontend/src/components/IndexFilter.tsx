import * as React from "react";

interface IIndexFilterProps {
    id: number;
    filterText: string;
    checked: boolean;
    onChange: (id: number, newChecked: boolean) => void;
}

function IndexFilter(props: IIndexFilterProps) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(props.id, e.target.checked);
    }

    return <label>
        <input type="checkbox" autoComplete="off" checked={props.checked} onChange={handleChange}/>
        {props.filterText}
    </label>
}

export default IndexFilter;