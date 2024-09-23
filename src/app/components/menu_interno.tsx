"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import React, {useState} from 'react';

export default function Menu(props:any) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header className={styles.header}>
            <div className={styles.menu_lateral}>
                <Image src="/images/logo_branca.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                <nav className={styles.menu_opcoes}>
                    <ul>
                        <li><Image className={styles.icones_menu_lateral} src={"/images/icone_painel.png"} alt={"painel"} width={17} height={17} priority/><Link href="../user/home">Home</Link></li>
                        <li><Image className={styles.icones_menu_lateral} src={"/images/icone_produtos.png"} alt={"produtos"} width={17} height={17} priority/><Link href="../user/produto">Produtos</Link></li>
                        <li><Image className={styles.icones_menu_lateral} src={"/images/icone_relatorios.png"} alt={"relatorios"} width={17} height={17} priority/><Link href="../user/relatorio">Relatórios</Link></li>
                        <li><Image className={styles.icones_menu_lateral} src={"/images/icone_vendas.png"} alt={"vendas"} width={17} height={17} priority/><Link href="../user/vendas">Vendas</Link></li>
                        <li><Image className={styles.icones_menu_lateral} src={"/images/icone_sair_inicial.png"} alt={"sair"} width={17} height={17} priority/><Link className="" href="#logout">Sair</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.menu_superior}>
                <div className={styles.menu_sanduiche}>
                    <Image src="/images/sandwich.png" className={styles.imagem_sandwich} alt="TrackVentory logo" width={160} height={70}  onClick={toggleMenu} priority/>
                    <div className={`${styles.menu_aberto} ${isOpen ? styles.menu_aberto_ativo : ''}`}>
                        <Image src="/images/closed_white.png" className={styles.closed}  alt="closed" width={10} height={10} onClick={toggleMenu} priority/>
                        <Image src="/images/logo_branca.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                        <nav className={styles.menu_opcoes}>
                            <ul>
                                <li><Link href="../user/produto">Home</Link></li>
                                <li><Link href="../user/produto">Produtos</Link></li>
                                <li><Link href="../user/relatorio">Relatórios</Link></li>
                                <li><Link href="../user/vendas">Vendas</Link></li>
                                <li><Link href="#logout">Sair</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <h1>Bem vindo, {props.usuario}!</h1>
                <div className={styles.perfil_config}>
                    <Image src="/images/icone_logo_preta.png" className={styles.imagem_perfil} alt="TrackVentory logo" width={160} height={80} priority/>
                </div>
            </div>
        </header>
    );
}