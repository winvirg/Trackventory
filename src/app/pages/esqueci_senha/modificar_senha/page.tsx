import Image from "next/image";
import Link from "next/link";
import styles from "../../../page.module.css";

export default function Modificar() {
    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <Image src="/images/icone_logo_preta.png" className={styles.imagem_logo_esqueceu} alt="TrackVentory logo" width={160} height={160} priority/>
                <h2>Modificar Senha</h2>
                <input type="password" placeholder="Nova Senha" name="senha"/>
                <input type="password" placeholder="Confirmar Nova Senha" name="nova_senha"/>
                <Link href="/login">
                    <button type="button">Salvar</button>
                </Link>
            </div>
        </main>
    );
}