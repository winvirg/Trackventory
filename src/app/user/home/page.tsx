"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, {useState} from 'react';

export default function Home(props:String) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className={styles.pagina_home}>
            <header className={styles.header}>
                <div className={styles.menu_lateral}>
                    <Image src="/images/logo_branca.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                </div>
                <div className={styles.menu_superior}>
                    <div className={styles.menu_sanduiche}>
                        <Image src="/images/sandwich.png" className={styles.imagem_sandwich} alt="TrackVentory logo" width={160} height={80}  onClick={toggleMenu} priority/>
                        <div className={`${styles.menu_aberto} ${isOpen ? styles.menu_aberto_ativo : ''}`}>
                            <Image src="/images/closed_white.png" className={styles.closed}  alt="closed" width={60} height={60} onClick={toggleMenu} priority/>
                            <Image src="/images/logo_branca.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                            <nav className={styles.menu_opcoes}>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
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
                    <div className={styles.gridpainel_home}>
                        <span className={styles.controle_estoque}></span>
                        <span className={styles.estatistica_venda}></span>
                        <span className={styles.ultimas_vendas}></span>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}