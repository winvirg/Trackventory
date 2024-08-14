import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Home(props:String) {
    return (
        <div className={styles.pagina_home}>
            <header className={styles.header}>
                <div className={styles.menu_lateral}>
                    <Image src="/images/logo_branca.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                </div>
                <div className={styles.menu_superior}>
                    <div className={styles.menu_sanduiche}>
                        <Image src="/images/sandwich.png" className={styles.imagem_sandwich} alt="TrackVentory logo" width={160} height={80} priority/>
                    </div>
                    <h1>Bem vindo Thiago{/* {props.name_empresa} */}</h1>
                    <div className={styles.perfil_config}>
                        <Image src="/images/icone.png" className={styles.imagem_perfil} alt="TrackVentory logo" width={160} height={80} priority/>
                    </div>
                </div>
            </header>
            <main>
                <div className={styles.painel_home}>
                    <h1>Bem vindo {/* {props.name_empresa} */}</h1>
                    <div className={styles.section_one}>
                        <span className={styles.controle_estoque}></span>
                        <span className={styles.estatistica_venda}></span>
                    </div>
                    <div className={styles.ultimas_vendas}></div>
                </div>
            </main>
        </div>
    );
}