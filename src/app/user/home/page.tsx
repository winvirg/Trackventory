"use client";

// import Image from "next/image";
// import Link from "next/link";
import styles from "../../page.module.css";
// import React, {useState} from 'react';

import Menu from "@/app/components/menu_interno";

export default function Home() {

    const name_user = "Artur";

    return (
        <div className={styles.pagina_home}>
            <Menu usuario={name_user} />
            <main role="main">
                <div className={styles.painel_home} role="region" aria-labelledby="painel-home-title">
                    <h1 id="painel-home-title">Bem vindo, {name_user}!</h1>
                    <div className={styles.gridpainel_home}>
                        <span className={styles.controle_estoque} role="button" aria-label="Controle de Estoque"></span>
                        <span className={styles.estatistica_venda} role="button" aria-label="Estatísticas de Venda"></span>
                        <span className={styles.ultimas_vendas} role="button" aria-label="Últimas Vendas"></span>
                    </div>
                </div>
            </main>
        </div>
    );
}
