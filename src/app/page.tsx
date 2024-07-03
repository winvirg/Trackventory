import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo_inicial}>
        <Image src="/images/logo_branca.png" alt="TrackVentory logo" width={200} height={100} priority/>
        <Link href="/login">
          <button type="button">Acessar o sistema</button>
        </Link>
      </div>
    </main>
  );
}
