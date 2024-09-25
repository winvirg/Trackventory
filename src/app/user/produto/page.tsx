"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, {useState} from 'react';

import Menu from "@/app/components/menu_interno";
import Categoria from "./categoria/page";

export default function Produto() {

    
    return (
        <div className={styles.pagina_produto}>
            <Menu/>
            <main>
                <div className={styles.painel_produto}>
                    <h1>Produtos</h1>
                    <div className={styles.gridpainel_produto}>
                        <div className={styles.botoes_produto}>
                            <input className={styles.pesquisa_produto}type="text" placeholder="Pesquisar Produto" name="pesquisa"/>
                            {/*Adicionar ícone de pesquisa*/}
                            <button type="button">Cadastrar Lote</button>
                            <button type="button">Cadastrar Produto</button>
                        </div>
                        <div></div>
                        <div className={styles.lista_produtos}>
                            {/*Adicionar ícones de ações*/}
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>EAN</th>
                                        <th>PRODUTO</th>
                                        <th>CATEGORIA</th>
                                        <th>QTD</th>
                                        <th>ESTOQUE (R$)</th>
                                        <th>&nbsp;</th>
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
                                                <Image className={styles.icones_tabela} src={"/images/icone_trash.png"} alt={"Excluir"} width={22} height={22} priority/>
                                            </button>
                                            <button type="button" name="editar">
                                                <Image className={styles.icones_tabela} src={"/images/icone_edit.png"} alt={"Editar"} width={22} height={22} priority/>
                                            </button>
                                        </td>
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