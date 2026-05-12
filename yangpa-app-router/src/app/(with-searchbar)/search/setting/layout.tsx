export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <header>
                <h3>설정 전용 레이아웃</h3>
            </header>
            {children}
        </div>
    );
}