import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Landing_page() {
    return (
        <div className={styles.landing_page}>
            <div className={styles.main_lp}>
                <header>
                    <a><Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={100} height={50} priority/></a>
                    <nav>
                        <ul>
                            <li><Link href="#sobre_nos">SOBRE NÓS</Link></li>
                            <li><Link href="#parceiros">PARCEIROS</Link></li>
                            <li><Link href="#parceiros">CONTATO</Link></li>
                            <li><Link href="#parceiros">LOGIN</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}