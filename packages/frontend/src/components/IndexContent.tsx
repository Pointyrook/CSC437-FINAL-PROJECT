import emptyStaffImg from "../empty-staff.png";
import IndexInterface from "./IndexInterface.tsx";

function IndexContent() {
    return <>
        <h2 className="main-title">Identify Chord by Notes</h2>
        <div className="main-box">
            <section className="main-box-left">
                <h2 className="main-subtitle">How do I use it?</h2>
                <p className="main-text">This paragraph will explain how to use the website. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
            </section>
            <div className="main-box-right">
                <img src={emptyStaffImg} alt="Empty music staff with a treble clef."/>
                <IndexInterface/>
            </div>
        </div>
    </>
}

export default IndexContent;