import { useState } from "react";
import ThemeContext from "./Context";
import MainContext from "./Context_useContext";
import Middle from "./Middle";

type Theme='light' | 'dark';
export default function DarkOrLight(){
    const[theme, setTheme] = useState<Theme>('light');

    const toggleTheme = ():void => {
        setTheme((prev) =>(prev === 'light'? 'dark': 'light'))
    };

    return(
        // <ThemeContext.Provider> </ThemeContext.Provider> 여기까지 컨텍스트 사용할꺼라 지정
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Middle />
            {/* <MainContext /> */}
        </ThemeContext.Provider>
    )
}