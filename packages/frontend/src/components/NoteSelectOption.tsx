interface INoteSelectOptionProps {
    value: string;
    key: string;
}

function NoteSelectOption(props: INoteSelectOptionProps) {
    return <option value={props.value}>{props.value}</option>
}

export default NoteSelectOption;