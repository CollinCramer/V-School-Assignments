import React, {useContext} from "react";
import { ThemeContext } from "./themeContext";

function PageContents(props) {

    const {color, toggleTheme} = useContext(ThemeContext)

    return(
        <main className={`${color}--page`}>
            <p className={`${color}--content`}>This is a {color} theme!</p>
            <button onClick={toggleTheme} className={`${color}--button`}>Toggle Theme</button>
        </main>
    )
}
export default PageContents