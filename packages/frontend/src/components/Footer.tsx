import FooterNavigation from "./FooterNavigation.tsx";
import { type LinkData } from "../main.tsx";

function Footer() {

    const socialLinks: LinkData[] = [
        {page: "/placeholder", displayText: "Facebook"},
        {page: "/placeholder", displayText: "Twitter"},
        {page: "/placeholder", displayText: "Instagram"},
    ];

    const stuffLinks: LinkData[] = [
        {page: "/placeholder", displayText: "thing 1"},
        {page: "/placeholder", displayText: "thing 2"},
        {page: "/placeholder", displayText: "thing 3"},
    ];

    return <footer className="footer-box">
        <div className="footer-box-copyright">
            <h6>Chord Identifier</h6>
            <p>Copyright [symbol] 2025 chord-identifier.com</p>
            <p>All rights reserved</p>
        </div>
        <FooterNavigation title={"Social"} links={socialLinks}/>
        <FooterNavigation title={"Stuff"} links={stuffLinks}/>
    </footer>
}

export default Footer;