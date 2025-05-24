import { Link } from "react-router";
import { type LinkData } from "../main.tsx";
import {nanoid} from "nanoid";

interface IFooterNavigationProps {
    title: string;
    links: LinkData[];
}

function FooterNavigation(props: IFooterNavigationProps) {

    const links = props.links.map((linkData) =>
        <Link key={`link-${nanoid()}`} to={linkData.page}>{linkData.displayText}</Link>);

    return <nav className="footer-box-nav">
        <p>{props.title}</p>
        {links}
    </nav>
}

export default FooterNavigation;