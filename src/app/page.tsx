import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.landing_page}>
            <div className={styles.main_lp}>
                <header>
                    <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={105} height={50} priority/>
                    <nav>
                        <ul>
                            <li><Link href="#sobre_nos">SOBRE NÓS</Link></li>
                            <li><Link href="#parceiros">PARCEIROS</Link></li>
                            <li><Link href="#contato">CONTATO</Link></li>
                            <li className={styles.btn_login}><Link href="/login" className={styles.link}><span>LOGIN</span><Image src="/images/logar.png" className={styles.icon_login} alt="ícone de logar" width={30} height={30} priority/></Link></li>
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
            <div className={styles.containerBeneficios}>
                <div className={styles.beneficiosGrid} id="beneficios"> 
                    <span>Principais Benefícios</span>
                    <div className={`${styles.beneficio1} ${styles.beneficio}`}>Beneficio1</div>
                    <div className={`${styles.beneficio2} ${styles.beneficio}`}>Beneficio2</div>
                    <div className={`${styles.beneficio3} ${styles.beneficio}`}>Beneficio3</div>
                    <div className={`${styles.beneficio4} ${styles.beneficio}`}>Beneficio4</div>
                </div>
            </div>
            <div className={styles.recursos} id="recursos">
                <span>Principais Recursos</span>
                <div className={`${styles.recurso1} ${styles.recurso}`}>Recurso1</div>
                <div className={`${styles.recurso2} ${styles.recurso}`}>Recurso2</div>
                <div className={`${styles.recurso3} ${styles.recurso}`}>Recurso3</div>
                <div className={`${styles.recurso4} ${styles.recurso}`}>Recurso4</div>   
            </div>
            <div className={styles.captura} id="captura">   
                <span>JUNTE-SE A NÓS E VIVA UMA EXPERIÊNCIA DE TRANSFORMAÇÃO NA GESTÃO COMERCIAL DO SEU NEGÓCIO</span>
                <button>Experimente grátis por 30 dias</button>
            </div>
            <div className={styles.parceiros} id="parceiros">   
                <span>Parceiros</span>
                <div className={`${styles.parceiro1} ${styles.parceiro}`}>Parceiro1</div>
                <div className={`${styles.parceiro2} ${styles.parceiro}`}>Parceiro2</div>
                <div className={`${styles.parceiro3} ${styles.parceiro}`}>Parceiro3</div>
                <div className={`${styles.parceiro4} ${styles.parceiro}`}>Parceiro4</div>   
            </div>
            <div className={styles.contato} id="contato">  
                <span>Entre em contato</span>
                <div className={styles.formulario}>
                    <p>SOLUTIONSTENO@GMAIL.COM <br/> MORADA NOVA - CE <br/>62940-000</p>
                    <form className={styles.campos}>
                        <input type="text" placeholder="Nome Completo" className={styles.campo}/>
                        <input type="email" placeholder="Email" className={styles.campo}/>
                        <input type="text" placeholder="Telefone" className={styles.campo}/>
                        <input type="text" placeholder="Assunto" className={styles.campo}/> 
                        <textarea placeholder="Descrição" className={styles.descricao}></textarea> 
                        <button type="submit">Entre em Contato</button>                    
                    </form>
                </div>
            </div>
    </main>
  );
}
