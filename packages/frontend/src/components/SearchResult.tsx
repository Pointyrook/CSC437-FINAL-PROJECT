import emptyStaffImg from "../empty-staff.png";
import { type ChordData } from "../main.tsx";

interface ISearchResultProps {
    data: ChordData;
}

function SearchResult(props: ISearchResultProps) {

    let notesDisplay = "";
    props.data.notes.forEach(note => {notesDisplay = notesDisplay + note + " "})

    return <article className="search-result-box">
        <div className="search-result-box-left">
            <h3>{props.data.title}</h3>
            <div className="search-result-info-text">
                <p>{props.data.name}</p>
                <p><b>{notesDisplay}</b></p>
                <p>{props.data.rarity}</p>
            </div>
        </div>
        <img className="search-result-box-right" src={emptyStaffImg}
             alt="Empty music staff with a treble clef."/>
    </article>
}

export default SearchResult;