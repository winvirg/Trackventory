"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';

import Menu from "@/app/components/menu_interno";

export default function Vendas() {
    return (
        <div className={styles.pagina_vendas}>
            <Menu />
            <main>
                <div className={styles.painel_vendas}>
                    <h1>Vendas</h1>
                    <div className={styles.gridpainel_vendas}>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
