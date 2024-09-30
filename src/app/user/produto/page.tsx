"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';

import Menu from "@/app/components/menu_interno";
import Categoria from "./categoria/page";

export default function Produto() {

    // ajustar botao de pesquisar
    return (
        <div className={styles.pagina_produto}>
            <Menu />
            <main>
                <div className={styles.painel_produto}>
                    <h1>Produtos</h1>
                    <div className={styles.gridpainel_produto}>
                        <div className={styles.botoes_produto}>
                            <div className={styles.pesquisa_produto}>
                                <input type="text" placeholder="Pesquisar Produto" name="pesquisa" />
                                <Link href={"#search"} className="botao_pesquisar">
                                    <Image className={styles.icones_tabela} src={"/images/icone_pesquisa.png"} alt={"Pesquisa"} width={20} height={20} priority />
                                </Link>
                            </div>
                            <button type="button">
                                <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"add"} width={20} height={20} priority />
                                Cadastrar Lote
                            </button>
                        </div>
                        <div className={styles.botoes_produto}>
                            <button type="button">
                                <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"add"} width={20} height={20} priority />
                                Cadastrar Produto
                            </button>
                        </div>
                        <div className={styles.lista_produtos}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>EAN</th>
                                        <th>PRODUTO</th>
                                        <th>CATEGORIA</th>
                                        <th>QTD</th>
                                        <th>ESTOQUE (R$)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0000000000000</td>
                                        <td>XXXX</td>
                                        <td>Equipamentos</td>
                                        <td>100</td>
                                        <td>100,00</td>
                                        <td>
                                            <button type="button" name="excluir">
                                                <Image src={"/images/icone_trash.png"} alt={"Excluir"} width={22} height={22} priority />
                                            </button>
                                            <button type="button" name="editar">
                                                <Image src={"/images/icone_edit.png"} alt={"Editar"} width={22} height={22} priority />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Categoria />
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}