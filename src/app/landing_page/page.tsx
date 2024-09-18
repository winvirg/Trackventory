import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Landing_page() {
    return (
        <div className={styles.landing_page}>
            <div className={styles.main_lp}>
                <header>
                    <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={100} height={50} priority/>
                    <nav>
                        <ul>
                            <li><Link href="#sobre_nos">SOBRE NÓS</Link></li>
                            <li><Link href="#parceiros">PARCEIROS</Link></li>
                            <li><Link href="#contato">CONTATO</Link></li>
                            <li className={styles.btn_login}><Link href="../login"><Image src="/images/logar.png" className={styles.imagem_logo} alt="TrackVentory logo" width={30} height={30} priority/>LOGIN</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}