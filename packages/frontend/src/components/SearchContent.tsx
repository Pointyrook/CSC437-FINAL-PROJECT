import SearchResult from "./SearchResult.tsx";
import {DEFAULT_RESULTS} from "./Constants.tsx";
import {useSearchParams} from "react-router";

function SearchContent() {

    const [searchParams] = useSearchParams("sort");
    const notes = searchParams.get("sort");
    const filters = searchParams.getAll("filter");

    const filtersAsString = filters.join(", ");

    return <>
        <div>
            <h2 className="sr-main-title">Showing chords with the note{notes !== null && notes.length > 1 ? "s" : ""} {(notes) ? notes.split("").join(" ") : ""}</h2>
            <p className="sr-main-subtitle">21 chords contain {notes !== null && notes.length > 1 ? "these notes" : "this note"}</p>
            <p className="sr-main-subtitle">{(filters.length !== 0) ? `Active filters: ${filtersAsString}`: "No filters active"}</p>
        </div>
        <div>
            {DEFAULT_RESULTS.map((result) =>
                <SearchResult key={result.id} data={result}></SearchResult>)}
        </div>
        <div className="sr-page-buttons-box">
            <button className="button-lift">1</button>
            <button className="button-lift">2</button>
            <button className="button-lift">{">"}</button>
        </div>
    </>
}

export default SearchContent;