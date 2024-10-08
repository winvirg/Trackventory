"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';
import CadastrarProduto from '../../components/modais/cadastrar_produto';
import CadastrarLote from "@/app/components/modais/cadastrar_lote";
import ExcluirProduto from "@/app/components/modais/excluir_produto";
import EditarProduto from "@/app/components/modais/editar_produto";

import Menu from "@/app/components/menu_interno";
import Categoria from "./categoria/page";

export default function Produto() {
    const [isFocused, setIsFocused] = useState(false);
    const [showModalProduto, setShowModalProduto] = useState(false);
    const [showModalLote, setShowModalLote] = useState(false);
    const [showModalExcluir, setShowModalExcluir] = useState(false);
    const [showModalEditar, setShowModalEditar] = useState(false);

    const openModalProduto = () => setShowModalProduto(true);
    const closeModalProduto = () => setShowModalProduto(false);

    const openModalLote = () => setShowModalLote(true);
    const closeModalLote = () => setShowModalLote(false);

    const openModalExcluir = () => setShowModalExcluir(true);
    const closeModalExcluir = () => setShowModalExcluir(false);

    const openModalEditar = () => setShowModalEditar(true);
    const closeModalEditar = () => setShowModalEditar(false);

    return (
        <div className={styles.pagina_produto}>
            <Menu />
            <main role="main">
                <div className={styles.painel_produto} aria-labelledby="titulo-produtos">
                    <h1 id="titulo-produtos">Produtos</h1>

                    <div className={styles.gridpainel_produto}>
                        <div className={styles.botoes_produto}>
                            <div className={`${styles.pesquisa_produto} ${isFocused ? styles.focused : ''}`}>
                                <input
                                    type="text"
                                    placeholder="Pesquisar Produto"
                                    name="pesquisa"
                                    aria-label="Pesquisar Produto"
                                    aria-describedby="descricao-pesquisa"
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                                <p id="descricao-pesquisa" hidden>Digite o nome do produto a ser pesquisado.</p>
                                <Link href={"#search"} className="botao_pesquisar" aria-label="Pesquisar">
                                    <Image className={styles.icones_tabela} src={"/images/icone_pesquisa.png"} alt={"Pesquisa"} width={50} height={50} priority />
                                </Link>
                            </div>
                            <button type="button" onClick={openModalLote} aria-label="Cadastrar Lote">
                                <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"Cadastrar Lote"} width={50} height={50} priority />
                                Cadastrar Lote
                            </button>
                        </div>

                        <div className={styles.botoes_produto}>
                            <button type="button" onClick={openModalProduto} aria-label="Cadastrar Produto">
                                <Image className={styles.icones_tabela} src={"/images/icone_plus.png"} alt={"Cadastrar Produto"} width={50} height={50} priority />
                                Cadastrar Produto
                            </button>
                        </div>

                        <div className={styles.lista_produtos}>
                            <table role="table" aria-label="Lista de Produtos">
                                <thead>
                                    <tr>
                                        <th scope="col">EAN</th>
                                        <th scope="col">PRODUTO</th>
                                        <th scope="col">CATEGORIA</th>
                                        <th scope="col">QTD</th>
                                        <th scope="col">ESTOQUE (R$)</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td role="cell" tabIndex={0}>0000000000000</td>
                                        <td role="cell" tabIndex={0}>XXXXXXXXXX</td>
                                        <td role="cell" tabIndex={0}>CategoriaX</td>
                                        <td role="cell" tabIndex={0}>100</td>
                                        <td role="cell" tabIndex={0}>100,00</td>
                                        <td role="cell" tabIndex={0}>
                                            <div className={styles.botoes_acao} role="group" aria-label="Ações do Produto">
                                                <button type="button" name="excluir" onClick={openModalExcluir} aria-label="Excluir Produto">
                                                    <Image className={styles.itens_acao} src={"/images/icone_trash.png"} alt={"Excluir"} width={20} height={20} priority />
                                                </button>
                                                <button type="button" name="editar" onClick={openModalEditar} aria-label="Editar Produto">
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
            {showModalEditar && <EditarProduto closeModalEditar={closeModalEditar} />}
        </div>

    );
}
