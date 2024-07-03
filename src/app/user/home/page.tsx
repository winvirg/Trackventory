import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                
                <input type="email" placeholder="E-mail" name=""/>
                <input type="password" placeholder="Senha" name=""/>

                <Link href="/">
                    <button type="button">Home teste</button>
                </Link>
            </div>
        </main>
    );
}