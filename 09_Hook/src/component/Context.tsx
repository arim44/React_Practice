// 컨텍스트 하나 만듬
import { createContext } from "react";

type Theme = 'light' | 'dark';

//공유할 타입
type ThemeContextType ={
    theme : Theme;
    toggleTheme: ()=> void;
}

// 공유할 초기값 던져넣음
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {console.log();},
});
export default ThemeContext;