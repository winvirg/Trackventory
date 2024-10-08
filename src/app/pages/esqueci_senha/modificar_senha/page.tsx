import Image from "next/image";
import Link from "next/link";
import styles from "../../../page.module.css";

export default function Modificar() {
    return (
        <main className={styles.main} role="main">
            <div className={styles.login} aria-labelledby="modificar-senha-titulo">
                <Image
                    src="/images/icone_logo_preta.png"
                    className={styles.imagem_logo_esqueceu}
                    alt="TrackVentory logo"
                    width={160}
                    height={160}
                    priority
                />
                <h2 id="modificar-senha-titulo">Modificar Senha</h2>
                <input
                    type="password"
                    placeholder="Nova Senha"
                    name="senha"
                    aria-label="Nova senha"
                    aria-required="true"
                />
                <input
                    type="password"
                    placeholder="Confirmar Nova Senha"
                    name="nova_senha"
                    aria-label="Confirmar nova senha"
                    aria-required="true"
                />
                <Link href="/login">
                    <button type="button" aria-label="Salvar nova senha">Salvar</button>
                </Link>
            </div>
        </main>
    );
}
