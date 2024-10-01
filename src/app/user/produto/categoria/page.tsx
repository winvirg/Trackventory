"use client";

import Image from "next/image";
import styles from "../../../page.module.css";
import React, { useState } from 'react';

export default function Categoria() {

    return (
        <div className={styles.categorias}>
            <form>
                <input type="text" placeholder="Nova Categoria" name="nova_categoria" />
                <button type="button">
                    <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"add"} width={50} height={50} priority />
                    Nova Categoria
                </button>
                <table className={styles.lista_categorias}>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}