import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
    return (
        <main className={styles.main}>
            <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
            <div className={styles.logo_inicial}>
                <Image src="/images/logo_branca.png" alt="TrackVentory logo" width={200} height={100} priority/>
                <Link href="./pages/login.tsx">
                    <button type="button">Acessar o sistema</button>
                </Link>
            </div>
        </main>
    );
}