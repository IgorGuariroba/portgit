import {Item, Link, List, Menu, Name, NavC} from "./Navbar.styles.ts";
import {faEnvelopeOpen, faFolderOpen, faHouse, faUserLarge} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Navbar() {
    return (
        <NavC>
            <Menu>
                <List>
                    <Item>
                        <Link>
                            <FontAwesomeIcon icon={faHouse} />
                            <Name>Home</Name>
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faUserLarge} />
                            <Name>About</Name>
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faFolderOpen} />
                            <Name>Portfolio</Name>
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                            <Name>Contact</Name>
                        </Link>
                    </Item>
                </List>
            </Menu>
        </NavC>
    );
}