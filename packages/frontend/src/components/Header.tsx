import { Link } from "react-router";

interface IHeaderProps {
    openModal: () => void;
}

function Header(props: IHeaderProps) {
    function handleClick() {
        props.openModal();
        console.log("yuh");
    }

    return <header className="header-box">
        <div className="header-box-left">
            <h1 className="header-title">Chord Identifier</h1>
            <nav className="nav-box">
                <Link to="/index">Home</Link>
                <Link to="/chord-types">Chord Types</Link>
            </nav>
        </div>
        <div className="search-bar-box">
            <label>
                <input className="search-bar" type="text" placeholder="i.e. DMaj7"/>
            </label>
        </div>
        <div className="header-box-right">
            <button className="login-link button-lift" onClick={handleClick}>Log In</button>
            <button className="signup-button button-lift" onClick={handleClick}>Sign Up</button>
        </div>
    </header>
}

export default Header;