import * as React from "react";

interface IModalProps {
    children: React.ReactNode;
    headerLabel: string;
    isOpen: boolean;
    onCloseRequested: () => void;
}

function Modal(props: IModalProps) {

    function handleClose() {
        props.onCloseRequested();
    }

    function handleOutsideClicks(e: React.MouseEvent<HTMLDivElement>) {
        console.log(e.target);
        if (e.target === document.getElementById("overlay")) {
            props.onCloseRequested();
        }
    }

    return (props.isOpen) ? <div id={"overlay"} onClick={handleOutsideClicks} className={"overlay"}>
        <div className={"modal-display-box"}>
            <header>
                <p>{props.headerLabel}</p>
                <label>
                    <button onClick={handleClose} aria-label={"Close"}></button>
                    X
                </label>
            </header>
            <div>
                {props.children}
            </div>
        </div>
    </div>
        : null;
}

export default Modal;