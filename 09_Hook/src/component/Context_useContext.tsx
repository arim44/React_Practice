import React, { useContext } from "react";
import ThemeContext from "./Context";

export default function MainContext(){
    //컨텍스트에 있는 상태 불러오기
    const {theme, toggleTheme} = useContext(ThemeContext);
    const styles: React.CSSProperties = {
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        backgroundColor: theme === 'light' ? '#fff':'#333',
        color : theme === 'light'? '1px sold #000' : '1px solid #fff',
    };
    return(
        <div style={styles}>
            <p> 현재 테마: {theme}</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
}

 //<button onClick={()=> dispatch({type:'RESET'})}>reset</button>