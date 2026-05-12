export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>헤더입니다</header>
            <main>
                {children}
            </main>
            <footer>풋터입니다.</footer>
        </div>
    );
}