"use client";

import Image from "next/image";
import styles from "../../../page.module.css";
import React, { useState } from 'react';

export default function Categoria() {

    return (
        <div className={styles.categorias}>
            <form aria-labelledby="form-categoria">
                <input
                    type="text"
                    placeholder="Nova Categoria"
                    name="nova_categoria"
                    aria-label="Campo para adicionar nova categoria"
                />
                <button
                    type="button"
                    aria-label="Adicionar nova categoria"
                >
                    <Image
                        className={styles.icones_tabela}
                        src={"/images/icone_plus.png"}
                        alt={"Adicionar nova categoria"}
                        width={50}
                        height={50}
                        priority
                    />
                    Nova Categoria
                </button>

                <table
                    className={styles.lista_categorias}
                    aria-label="Lista de Categorias"
                >
                    <tbody>
                        <tr>
                            <td role="cell" tabIndex={0} aria-label="Categoria X">CategoriaX</td>
                        </tr>
                        <tr>
                            <td role="cell" tabIndex={0} aria-label="Categoria Y">CategoriaY</td>
                        </tr>
                        <tr>
                            <td role="cell" tabIndex={0} aria-label="Categoria Z">CategoriaZ</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
