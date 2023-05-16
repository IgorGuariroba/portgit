import {ThemeProvider} from "styled-components";
import {Navbar} from './components/navbar/Navbar';
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyle} from "./styles/global.ts";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar/>
            <GlobalStyle/>
        </ThemeProvider>
    );
}