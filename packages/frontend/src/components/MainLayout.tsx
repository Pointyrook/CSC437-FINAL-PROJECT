import Header from './Header';
import Footer from "./Footer.tsx";
import { Outlet } from "react-router";
import Modal from "./Modal";
import LoginForm from "./LoginForm.tsx";
import {useState} from "react";

interface IMainLayoutProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export function MainLayout(props: IMainLayoutProps) {

    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
        console.log("yuhhh");
    }

    function closeModal() {
        setOpen(false);
    }

    function handleChange() {
        props.toggleDarkMode();
        console.log("dark mode toggled")
    }

    return (<>
        <div className={props.darkMode ? "dark-mode" : ""}>
            <Modal headerLabel={"Log In (also didn't have much time for this, sorry)"} isOpen={open} onCloseRequested={closeModal}>
                <LoginForm />
            </Modal>
            <label>
                <input type={"checkbox"} onChange={handleChange}/>
                Dark Mode (I didn't have time to implement this in a better spot, sorry)
            </label>
            <Header openModal={openModal}/>
            <main className="big-gradient-background">
                <Outlet />
            </main>
            <Footer />
        </div>
    </>);
}