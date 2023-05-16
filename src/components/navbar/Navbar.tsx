import {Item, List, Menu, Name,  NavC} from "./Navbar.styles.ts";

export function Navbar() {
    return (
        <NavC>
            <Menu>
                <List>
                    <Item>
                        <Name>Home</Name>
                    </Item>
                </List>
            </Menu>
        </NavC>
    );
}