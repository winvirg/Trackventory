"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';

import Menu from "@/app/components/menu_interno";

export default function Relatorios() {
    return (
        <div className={styles.pagina_relatorios}>
            <Menu />
            <main>
                <div className={styles.painel_relatorios}>
                    <h1>Relatórios</h1>
                    <div className={styles.gridpainel_relatorios}>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
