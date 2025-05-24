import ChordTypesDropdown from "./ChordTypesDropdown.tsx";

function ChordTypesAllBoxes () {

    return <div className="ct-main-box">
        <ChordTypesDropdown category={"Chords by Root Note"}/>
        <ChordTypesDropdown category={"Chords by Quality"}/>
        <ChordTypesDropdown category={"Chords by Specific Type"}/>
        <ChordTypesDropdown category={"Chords by Rarity"}/>
    </div>
}

export default ChordTypesAllBoxes;