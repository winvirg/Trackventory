"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import React, { useState } from 'react';

export default function Menu(props: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.menu_lateral}>
                <Image
                    src="/images/logo_branca.png"
                    className={styles.imagem_logo}
                    alt="TrackVentory logo"
                    width={160}
                    height={80}
                    priority
                />
                <nav className={styles.menu_opcoes} aria-label="Menu lateral">
                    <ul>
                        <li>
                            <Image
                                className={styles.icones_menu_lateral}
                                src={"/images/icone_painel.png"}
                                alt={"Home"}
                                width={17}
                                height={17}
                                priority
                            />
                            <Link href="../user/home" aria-label="Ir para Home">Home</Link>
                        </li>
                        <li>
                            <Image
                                className={styles.icones_menu_lateral}
                                src={"/images/icone_produtos.png"}
                                alt={"Produtos"}
                                width={17}
                                height={17}
                                priority
                            />
                            <Link href="../user/produto" aria-label="Ir para Produtos">Produtos</Link>
                        </li>
                        <li>
                            <Image
                                className={styles.icones_menu_lateral}
                                src={"/images/icone_vendas.png"}
                                alt={"Vendas"}
                                width={17}
                                height={17}
                                priority
                            />
                            <Link href="../user/vendas" aria-label="Ir para Vendas">Vendas</Link>
                        </li>
                        <li>
                            <Image
                                className={styles.icones_menu_lateral}
                                src={"/images/icone_relatorios.png"}
                                alt={"Relatórios"}
                                width={17}
                                height={17}
                                priority
                            />
                            <Link href="../user/relatorio" aria-label="Ir para Relatórios">Relatórios</Link>
                        </li>
                        <li>
                            <Image
                                className={styles.icones_menu_lateral}
                                src={"/images/icone_sair_inicial.png"}
                                alt={"Sair"}
                                width={17}
                                height={17}
                                priority
                            />
                            <Link href="#logout" aria-label="Sair">Sair</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.menu_superior}>
                <div className={styles.menu_sanduiche}>
                    <Image
                        src="/images/sandwich.png"
                        className={styles.imagem_sandwich}
                        alt="Abrir menu"
                        width={160}
                        height={70}
                        onClick={toggleMenu}
                        priority
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
                    />
                    <div className={`${styles.menu_aberto} ${isOpen ? styles.menu_aberto_ativo : ''}`} role="dialog" aria-modal="true" aria-labelledby="menu-aberto-titulo">
                        <Image
                            src="/images/closed_white.png"
                            className={styles.closed}
                            alt="Fechar menu"
                            width={10}
                            height={10}
                            onClick={toggleMenu}
                            priority
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
                        />
                        <Image
                            src="/images/logo_branca.png"
                            className={styles.imagem_logo}
                            alt="TrackVentory logo"
                            width={160}
                            height={80}
                            priority
                        />
                        <nav className={styles.menu_opcoes} aria-label="Menu aberto">
                            <ul>
                                <li><Link href="../user/home" aria-label="Ir para Home">Home</Link></li>
                                <li><Link href="../user/produto" aria-label="Ir para Produtos">Produtos</Link></li>
                                <li><Link href="../user/relatorio" aria-label="Ir para Relatórios">Relatórios</Link></li>
                                <li><Link href="../user/vendas" aria-label="Ir para Vendas">Vendas</Link></li>
                                <li><Link href="#logout" aria-label="Sair">Sair</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <h1 id="menu-aberto-titulo">Bem vindo, {props.usuario}!</h1>
                <div className={styles.perfil_config}>
                    <Image
                        src="/images/icone_logo_preta.png"
                        className={styles.imagem_perfil}
                        alt="Logo do perfil"
                        width={160}
                        height={80}
                        priority
                    />
                </div>
            </div>
        </header>
    );
}
