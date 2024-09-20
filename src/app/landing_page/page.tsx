import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Landing_page() {
    return (
        <div className={styles.landing_page}>
            <div className={styles.main_lp}>
                <header>
                    <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={105} height={50} priority/>
                    <nav>
                        <ul>
                            <li><Link href="#sobre_nos">SOBRE NÓS</Link></li>
                            <li><Link href="#parceiros">PARCEIROS</Link></li>
                            <li><Link href="#contato">CONTATO</Link></li>
                            <li className={styles.btn_login}><Link href="../login" className={styles.link}><span>LOGIN</span><Image src="/images/logar.png" className={styles.icon_login} alt="ícone de logar" width={30} height={30} priority/></Link></li>
                        </ul>
                    </nav>
                </header>
                <div className={styles.bannerContainer}>
                    <h1>Otimize a gestão da sua empresa com poucos cliques!</h1>
                </div>
            </div>
            <div className={styles.sessaoDestaque} id="sobre_nos">
                <div className={styles.devices}>
                <Image src="/images/devices.png" className={styles.imagem_devices} alt="Dispositivos Móveis" width={600} height={500} priority/>
                </div>
                <h1>Controle de vendas e estoque simplificado acesse onde e quando quiser</h1>
            </div>
            <div className={styles.beneficios} id="beneficios">   
                <section className={styles.beneficio1}>Benefício 1</section>
                <section className={styles.beneficio2}>Benefício 2</section>
                <section className={styles.beneficio3}>Benefício 3</section>
                <section className={styles.beneficio4}>Benefício 4</section>
            </div>
            <div className={styles.recursos} id="recursos">   
            </div>
            <div className={styles.captura} id="captura">   
            </div>
            <div className={styles.parceiros} id="parceiros">   
            </div>
            <div className={styles.contato} id="contato">   
            </div>
        </div>
    );
}