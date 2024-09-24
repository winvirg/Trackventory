import Image from "next/image";
import Link from "next/link";
import styles from "../../../page.module.css";

export default function Redefinir() {
    return (
        <main className={styles.main}>
            <div className={styles.container_redefinir}>
                <Image className={styles.logo} src="/images/logo_preta.png" alt="TrackVentory logo" width={200} height={100} priority/>
                
                <div className={styles.texto}>
                    Olá [Nome do Usuário],<br/><br/>
                    Parece que você solicitou a redefinição da sua senha na Trackventory.<br/>
                    Não se preocupe, estamos aqui para ajudar você a recuperar o acesso rapidamente!<br/>
                    Para redefinir sua senha, basta clicar no link abaixo:
                </div>

                <Link href="/pages/esqueci_senha/modificar_senha">
                    <button type="button">Redefinir Senha</button>
                </Link>

                <div className={styles.texto}>
                    Este link é válido por 24 horas, então, se você não solicitou a alteração ou precisa de mais tempo, fique tranquilo!<br />
                    Basta repetir o processo de recuperação a qualquer momento.<br/><br/>
                    Caso você não tenha solicitado a mudança de senha, ignore este e-mail. Sua conta permanecerá segura.<br />
                    Se precisar de mais ajuda, entre em contato com nosso suporte através de solutionssteno@gmail.com.<br/>
                    Agradecemos por escolher a Trackventory!<br/><br/>
                    Atenciosamente,<br />
                    Equipe Trackventory.<br/>
                    Gestão de Estoque Simplificada.
                </div>
            </div>
        </main>
    );
}
