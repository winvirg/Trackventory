"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';
import Menu from "@/app/components/menu_interno";

export default function Home() {
    const name_user = "Artur";

    return (
        <div className={styles.pagina_home}>
            <Menu usuario={name_user} role="navigation" aria-label="Menu de navegação interno" />

            <main role="main">
                <div className={styles.painel_home}>
                    <h1 className={styles.titulo}>Bem-vindo Winvirg Construções</h1>

                    <div className={styles.gridpainel_home} role="region" aria-label="Painéis de controle e informação de vendas e estoque">
                        <div className={styles.vendas}>
                            <div className={`${styles.card} ${styles.card_hoje}`}>
                                <h2>VENDAS HOJE</h2>
                                <p>R$ 300,00</p>
                            </div>
                            <div className={`${styles.card} ${styles.card_mes}`}>
                                <h2>VENDAS MÊS</h2>
                                <p>R$ 2500,00</p>
                            </div>
                            <div className={`${styles.card} ${styles.card_anual}`}>
                                <h2>LUCRO ANUAL</h2>
                                <p>R$ 80.000,00</p>
                            </div>
                        </div>

                        <div className={styles.listaComPontos}>
                            <ul className={styles.legenda}>
                                <li><span className={styles.pontoVermelho}></span></li>
                                <li><span className={styles.pontoAmarelo}></span></li>
                                <li><span className={styles.pontoVerde}></span></li>
                            </ul>
                            <ul>
                                <li><span className={styles.pontoVermelho}></span>Lorem ipsum lorem</li>
                                <li><span className={styles.pontoVermelho}></span>Lorem ipsum lorem</li>
                                <li><span className={styles.pontoAmarelo}></span>Lorem ipsum lorem</li>
                                <li><span className={styles.pontoAmarelo}></span>Lorem ipsum lorem</li>
                                <li><span className={styles.pontoVerde}></span>Lorem ipsum lorem</li>
                                <li><span className={styles.pontoVerde}></span>Lorem ipsum lorem</li>
                            </ul>
                        </div>

                        <div className={`${styles.tabelaProdutos} ${styles.tabelaProdutosTendencias}`}>
                            <table>
                                <thead>Produtos Mais Vendidos:</thead>
                                <tbody>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={`${styles.tabelaProdutos} ${styles.tabelaUltimasVendas}`}>
                            <table>
                                <thead>Últimas Vendas:</thead>
                                <tbody>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                    <tr><td>Produto lorem ipsum lorem ipsum</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={styles.botao_suporte}>
                    <Image className={styles.icone_suporte} src={"/images/icone_suporte_chat.png"} alt={"Contate nosso Suporte"} width={50} height={50} />
                </div>
            </main>
        </div>
    );
}
