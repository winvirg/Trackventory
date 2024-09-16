import styles from "../page.module.css";

export default function Landing_page() {
    return (
        <div className={styles.landing_page}>
            <div className={styles.main_lp}>
                <nav>
                    <ul>
                        <li>SOBRE NÓS</li>
                        <li>PARCEIROS</li>
                        <li>CONTATO</li>
                        <li>LOGIN <i></i></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}