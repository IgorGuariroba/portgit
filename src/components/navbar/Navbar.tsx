import {Item, Link, List, Menu, Name, Nav, Toggle} from "./Navbar.styles.ts";
import {faBars, faEnvelopeOpen, faFolderOpen, faHouse, faUserLarge} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
            <Menu>
                <List>
                    <Item>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} />
                            <Name>Home</Name>
                        </Link>
                        <Link to="/sobre">
                            <FontAwesomeIcon icon={faUserLarge} />
                            <Name>About</Name>
                        </Link>
                        <Link to="/portifolio">
                            <FontAwesomeIcon icon={faFolderOpen} />
                            <Name>Portfolio</Name>
                        </Link>
                        <Link to="/contato">
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                            <Name>Contact</Name>
                        </Link>
                    </Item>
                </List>
            </Menu>
            <Toggle icon={faBars} onClick={handleToggleClick}/>
        </Nav>
    );
}