import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.base}>
            <h1 className={styles.title}>
                React todo list
                <span className={styles.tagline}>
                    Structure your chaos
                </span>
            </h1>
        </header>
    )
}
