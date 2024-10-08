import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Login() {
    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <Image
                    src="/images/logo_preta.png"
                    className={styles.imagem_logo}
                    alt="TrackVentory logo"
                    width={160}
                    height={80}
                    priority
                    role="img"
                    aria-label="Logotipo TrackVentory"
                />
                <label htmlFor="email" className={styles.hidden}>E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    name="email"
                    aria-label="Insira seu e-mail"
                    required
                />
                <label htmlFor="password" className={styles.hidden}>Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    name="password"
                    aria-label="Insira sua senha"
                    required
                />
                <Link
                    className={styles.esqueceu_senha}
                    href="../pages/esqueci_senha"
                    aria-label="Esqueceu a senha? Clique para redefinir">
                    Esqueceu a Senha?
                </Link>
                <Link href="/user/home">
                    <button type="button" aria-label="Clique para fazer login">Login</button>
                </Link>
            </div>
        </main>
    );
}
