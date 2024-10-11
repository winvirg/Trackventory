"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';

import ExcluirProduto from "@/app/components/modais/excluir_produto";
import Menu from "@/app/components/menu_interno";

export default function Vendas() {
    const [isFocused, setIsFocused] = useState(false);
    const [showModalExcluir, setShowModalExcluir] = useState(false);

    const openModalExcluir = () => setShowModalExcluir(true);
    const closeModalExcluir = () => setShowModalExcluir(false);

    return (
        <div className={styles.pagina_vendas}>
            <Menu />
            <main role="main">
                <div className={styles.painel_produto} aria-labelledby="titulo-vendas">
                    <h1 id="titulo-vendas">Vendas</h1>

                    <div className={styles.gridpainel_produto}>                      
                        <div className={styles.lista_produtos}>
                            <table role="table" aria-label="Tabela de Vendas">
                                <thead>
                                    <tr>
                                        <th scope="col">EAN</th>
                                        <th scope="col">PRODUTO</th>
                                        <th scope="col">CATEGORIA</th>
                                        <th scope="col">LOTE</th>
                                        <th scope="col">QTD</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td role="cell" tabIndex={0}>0000000000000</td>
                                        <td role="cell" tabIndex={0}>XXXXXXXXXX</td>
                                        <td role="cell" tabIndex={0}>CategoriaX</td>
                                        <td role="cell" tabIndex={0}>100</td>
                                        <td role="cell" tabIndex={0}>100</td>
                                        <td role="cell" tabIndex={0}>
                                            <div className={styles.botoes_acao} role="group" aria-label="Ações da Venda">
                                                <button type="button" name="excluir" onClick={openModalExcluir} aria-label="Excluir Venda">
                                                    <Image className={styles.itens_acao} src={"/images/icone_trash.png"} alt={"Excluir"} width={20} height={20} priority />
                                                </button>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </main>

            {showModalExcluir && <ExcluirProduto closeModalExcluir={closeModalExcluir} />}

            <footer></footer>
        </div>
    );
}
