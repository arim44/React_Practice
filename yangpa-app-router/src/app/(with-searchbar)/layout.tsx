import styles from '../page.module.css'

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.page}>
            <input type="text" placeholder="검색어를 입력하시오" />
            {children}
        </div>
    );
}