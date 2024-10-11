import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function NavSuperior() {
    return(
        <div className={styles.nav_superior}>
            <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={105} height={50} priority />
            <nav aria-label="Menu de Navegação">
              <ul>
                <li><Link href="#sobre_nos" aria-label="Sobre Nós">SOBRE NÓS</Link></li>
                <li><Link href="#parceiros" aria-label="Parceiros">PARCEIROS</Link></li>
                <li><Link href="#contato" aria-label="Contato">CONTATO</Link></li>
                <li className={styles.btn_login}>
                  <Link href="/login" className={styles.link} aria-label="Acessar página de login">
                    <span>LOGIN</span>
                    <Image src="/images/logar.png" className={styles.icon_login} alt="ícone de logar" width={30} height={30} priority />
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
    );
}