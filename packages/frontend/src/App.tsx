import {Route, Routes} from "react-router";
import {MainLayout} from "./components/MainLayout.tsx";
import IndexContent from "./components/IndexContent.tsx";
import ChordTypesContent from "./components/ChordTypesContent.tsx";
import SearchContent from "./components/SearchContent.tsx";
import ChordContent from "./components/ChordContent.tsx";
import * as React from "react";

function App() {

    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
        <Routes>
            <Route path={"/"} element={<MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
                <Route path={"/index"} index element={<IndexContent />} />
                <Route path={"/chord-types"} element={<ChordTypesContent />} />
                <Route path={"/sample-search"} element={<SearchContent />} />
                <Route path={"/sample-chord/:chord"} element={<ChordContent />} />
            </Route>
            <Route path={"/placeholder"} element={<h2>Oops I didn't add this yet</h2>}/>
        </Routes>
    );
}

export default App;
