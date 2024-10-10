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
                    <h1>Bem-vindo, {name_user}!</h1>

                    <div className={styles.gridpainel_home} role="region" aria-label="Painéis de controle de vendas e estoque">
                        <span className={styles.controle_estoque} role="button" tabIndex={0} aria-label="Controle de Estoque"></span>
                        <span className={styles.estatistica_venda} role="button" tabIndex={0} aria-label="Estatísticas de Vendas"></span>
                        <span className={styles.ultimas_vendas} role="button" tabIndex={0} aria-label="Últimas Vendas"></span>
                    </div>
                </div>
            </main>
        </div>
    );
}