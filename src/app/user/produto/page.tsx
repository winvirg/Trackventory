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
                        <div className={styles.botoes_produto}>
                            <button type="button">Cadastrar Lote</button>
                            <button type="button">Cadastrar Produto</button>
                        </div>
                        <div></div>
                        <div className={styles.lista_produtos}>
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>EAN</th>
                                        <th>PRODUTO</th>
                                        <th>CATEGORIA</th>
                                        <th>QTD</th>
                                        <th>ESTOQUE (R$)</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Editar</td>
                                        <td>Excluir</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Editar</td>
                                        <td>Excluir</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Editar</td>
                                        <td>Excluir</td>
                                    </tr>
                                </tbody>
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