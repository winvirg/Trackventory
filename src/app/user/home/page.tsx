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
            <Menu usuario={name_user}/>
            <main>
                <div className={styles.painel_home}>
                    <h1>Bem vindo {name_user}</h1>
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