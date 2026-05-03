import './Header.css'

function Header(){
    return(
        <div className="Header">
            {/* 특수문자 ctrl + cmd + 스페이스바 */}
            <h3> 오늘은 🗓️ </h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default Header;