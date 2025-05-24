import emptyStaffImg from "../empty-staff.png";
import type {ChordData} from "../main.tsx";
import {useParams} from "react-router";
import {DEFAULT_RESULTS} from "./Constants.tsx";

function ChordContent() {
    const chordParam = useParams().chord;
    let chord: ChordData = {
        id: 0,
        title: "",
        name: "",
        notes: [],
        rarity: ""
    };
    if (chordParam) {
        DEFAULT_RESULTS.forEach((c: ChordData) => {
            if (c.name === chordParam) chord = c;
        })
    }


    return <>
        <h2 className="main-title">{chord.name}</h2>
        <p className="sc-main-text">Notated as: {chord.title}</p>
        <div className="sc-main-box">
            <div className="main-box-left">
                <img className="sc-empty-staff" src={emptyStaffImg} alt="Empty music staff with a treble clef."/>
            </div>
            <section className="sc-main-box-right">
                <h2 className="main-subtitle">Chord Info</h2>
                <dl className="sc-info">
                    <dt>Full Name:</dt>
                    <dd>{chord.name}</dd>
                    <dt>Notes:</dt>
                    <dd>{chord.notes.join(" ")}</dd>
                    <dt>Quality:</dt>
                    <dd>{chord.name.split(" ")[1]}</dd>
                    <dt>Type:</dt>
                    <dd>{chord.name.split(" ")[2]}</dd>
                    <dt>Rarity:</dt>
                    <dd>{chord.rarity}</dd>
                </dl>
            </section>
        </div>
    </>
}

export default ChordContent;