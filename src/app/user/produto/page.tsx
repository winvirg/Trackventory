"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, {useState} from 'react';

import Menu from "@/app/components/menu_interno";
import Categoria from "./categoria/page";

export default function Produto() {

    const name_user = "Thiago";
    
    return (
        <div className={styles.pagina_produto}>
            <Menu usuario={name_user}/>
            <main>
                <div className={styles.painel_produto}>
                    <h1>Produtos</h1>
                    <div className={styles.gridpainel_produto}>
                        <div className={styles.lista_produtos}>
                            <table border={1}>
                                <tr>
                                    
                                </tr>
                            </table>
                        </div>
                        <Categoria/>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}