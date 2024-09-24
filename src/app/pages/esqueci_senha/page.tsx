import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Esqueceu() {
    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <Image src="/images/icone_logo_preta.png" className={styles.imagem_logo_esqueceu} alt="TrackVentory logo" width={160} height={160} priority/>
                <h2>Recuperar Senha</h2>
                <span>Informe seu e-mail e clique em "RECUPERAR" para recuperar a sua senha</span>
                <input type="email" placeholder="E-mail" name="email"/>
                <Link href="/pages/esqueci_senha/email_redefinir">
                    <button type="button">Recuperar</button>
                </Link>
            </div>
        </main>
    );
}