import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Esqueceu() {
    return (
        <main className={styles.main} role="main">
            <div className={styles.login} aria-labelledby="recuperar-senha-title">
                <Image
                    src="/images/icone_logo_preta.png"
                    className={styles.imagem_logo_esqueceu}
                    alt="TrackVentory logo"
                    width={160}
                    height={160}
                    priority
                />
                <h2 id="recuperar-senha-title">Recuperar Senha</h2>
                <span>Informe seu e-mail e clique em "RECUPERAR" para recuperar a sua senha</span>
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    aria-label="E-mail para recuperação de senha"
                    aria-required="true"
                />
                <Link href="/pages/esqueci_senha/modificar_senha">
                    <button type="button" aria-label="Clique para recuperar sua senha">Recuperar</button>
                </Link>
            </div>
        </main>
    );
}
