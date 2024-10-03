"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';
import CadastrarProduto from '../../components/modais/cadastrar_produto';
import CadastrarLote from "@/app/components/modais/cadastrar_lote";
import ExcluirProduto from "@/app/components/modais/excluir_produto";

import Menu from "@/app/components/menu_interno";
import Categoria from "./categoria/page";

export default function Produto() {
    const [isFocused, setIsFocused] = useState(false);
    const [showModalProduto, setShowModalProduto] = useState(false);
    const [showModalLote, setShowModalLote] = useState(false);
    const [showModalExcluir, setShowModalExcluir] = useState(false);

    const openModalProduto = () => setShowModalProduto(true);
    const closeModalProduto = () => setShowModalProduto(false);

    const openModalLote = () => setShowModalLote(true);
    const closeModalLote = () => setShowModalLote(false);

    const openModalExcluir = () => setShowModalExcluir(true);
    const closeModalExcluir = () => setShowModalExcluir(false);

    return (
        <div className={styles.pagina_produto}>
            <Menu />
            <main>
                <div className={styles.painel_produto}>
                    <h1>Produtos</h1>
                    <div className={styles.gridpainel_produto}>
                        <div className={styles.botoes_produto}>
                            <div className={`${styles.pesquisa_produto} ${isFocused ? styles.focused : ''}`}>
                                <input
                                    type="text"
                                    placeholder="Pesquisar Produto"
                                    name="pesquisa"
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                                <Link href={"#search"} className="botao_pesquisar">
                                    <Image className={styles.icones_tabela} src={"/images/icone_pesquisa.png"} alt={"Pesquisa"} width={50} height={50} priority />
                                </Link>
                            </div>
                            <button type="button" onClick={openModalLote}>
                                <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"add"} width={50} height={50} priority />
                                Cadastrar Lote
                            </button>
                        </div>
                        <div className={styles.botoes_produto}>
                            <button type="button" onClick={openModalProduto}>
                                <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"add"} width={50} height={50} priority />
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
                                        <td>XXXXXXXXXX</td>
                                        <td>CategoriaX</td>
                                        <td>100</td>
                                        <td>100,00</td>
                                        <td>
                                            <div className={styles.botoes_acao}>
                                                <button type="button" name="excluir" onClick={openModalExcluir}>
                                                    <Image className={styles.itens_acao} src={"/images/icone_trash.png"} alt={"Excluir"} width={20} height={20} priority />
                                                </button>
                                                <button type="button" name="editar">
                                                    <Image className={styles.itens_acao} src={"/images/icone_edit.png"} alt={"Editar"} width={20} height={20} priority />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Categoria />
                    </div>
                </div>
            </main>

            {showModalProduto && <CadastrarProduto closeModalProduto={closeModalProduto} />}
            {showModalLote && <CadastrarLote closeModalLote={closeModalLote} />}
            {showModalExcluir && <ExcluirProduto closeModalExcluir={closeModalExcluir} />}

            <footer></footer>
        </div>
    );
}
