"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import React, { useState } from 'react';

import ExcluirProduto from "@/app/components/modais/excluir_produto";
import VendaRegistrada from "@/app/components/modais/venda_registrada";
import Menu from "@/app/components/menu_interno";

export default function Vendas() {
    const [isFocused, setIsFocused] = useState(false);
    const [showModalExcluir, setShowModalExcluir] = useState(false);
    const [showModalVendaRegistrada, setShowModalVendaRegistrada] = useState(false);

    const openModalExcluir = () => setShowModalExcluir(true);
    const closeModalExcluir = () => setShowModalExcluir(false);
    const openModalVendaRegistrada = () => setShowModalVendaRegistrada(true);
    const closeModalVendaRegistrada = () => setShowModalVendaRegistrada(false);

    return (
        <div className={styles.pagina_vendas}>
            <Menu />
            <main role="main">
                <div className={styles.painel_vendas} aria-labelledby="titulo-vendas">
                    <div className={styles.cabecalho}>
                        <h1 id="titulo-vendas">Vendas</h1><span className={styles.n_vendas} aria-label="Número de vendas">000001</span>
                    </div>
                    <div className={styles.filtrosVendas}>
                        <div className={styles.camposFiltro}>
                            <div className={`${styles.selectVendas}  ${styles.vendedor}`}>
                                <select className={`${styles.boxFiltro}`} aria-label="Vendedor">
                                    <option value={"Vendedor"} disabled selected>Vendedor</option>
                                    <option value={"VendedorX"}>VendedorX</option>
                                    <option value={"VendedorY"}>VendedorY</option>
                                    <option value={"VendedorZ"}>VendedorZ</option>
                                </select>
                            </div>
                            <div className={`${styles.selectVendas}  ${styles.tipo_cliente}`}>
                                <select className={`${styles.boxFiltro}`} aria-label="Tipo de cliente">
                                    <option value={"Tipo de cliente"} disabled selected>Tipo de cliente</option>
                                    <option value={"ClienteX"}>ClienteX</option>
                                    <option value={"ClienteY"}>ClienteY</option>
                                    <option value={"ClienteZ"}>ClienteZ</option>
                                </select>
                            </div>
                            <div className={`${styles.selectVendas}  ${styles.pagamento}`}>
                                <select className={`${styles.boxFiltro}`} aria-label="Forma de Pagamento">
                                    <option value={"Forma de pagamento"} disabled selected>Forma de pagamento</option>
                                    <option value={"Forma de pagamentoX"}>Forma de pagamentoX</option>
                                    <option value={"Forma de pagamentoY"}>Forma de pagamentoY</option>
                                    <option value={"Forma de pagamentoZ"}>Forma de pagamentoZ</option>
                                </select>
                            </div>
                            <input className={`${styles.inputFiltro} ${styles.nome_produto}`} aria-label="Nome do produto" placeholder="Nome do produto"/>
                            <div className={`${styles.selectVendas} ${styles.lote}`}>
                                <select className={`${styles.boxFiltro}`} aria-label="Lote">
                                    <option value={"Lote"} disabled selected>Lote</option>
                                    <option value={"LoteX"}>LoteX</option>
                                    <option value={"LoteY"}>LoteY</option>
                                    <option value={"LoteZ"}>LoteZ</option>
                                </select>
                            </div>
                            <input className={`${styles.inputFiltro} ${styles.qtd}`} type="number" aria-label="Quantidade" placeholder="Quantidade"/>
                            <input className={`${styles.inputFiltro} ${styles.valor_item}`} aria-label="Valor do item" placeholder="Valor do item"/>
                            <div className={styles.painelVT}>
                                <span></span><span className={styles.valorTotal} aria-label="Valor total das vendas">100,00</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className={styles.gridpainel_vendas}>                      
                        <div className={styles.lista_vendas}>
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
                                        <td className={`${styles.celulaTabela_vendas} ${styles.celulaEan}`} role="cell" tabIndex={0}>0000000000000</td>
                                        <td className={`${styles.celulaTabela_vendas} ${styles.celulaProduto}`} role="cell" tabIndex={0}>XXXXXXXXXX</td>
                                        <td className={`${styles.celulaTabela_vendas} ${styles.celulaCategoria}`} role="cell" tabIndex={0}>CategoriaX</td>
                                        <td className={`${styles.celulaTabela_vendas} ${styles.celulaLote}`} role="cell" tabIndex={0}>100</td>
                                        <td className={`${styles.celulaTabela_vendas} ${styles.celulaQtd}`} role="cell" tabIndex={0}>100</td>
                                        <td className={`${styles.celulaTabela_vendas} ${styles.acaoTabelaVendas}`} role="cell" tabIndex={0}>
                                            <div className={styles.botoes_acaoVendas} role="group" aria-label="Ações da Venda">
                                                <button type="submit" name="excluir" onClick={openModalExcluir} aria-label="Excluir Venda">
                                                    <Image className={styles.item_acaoVenda} src={"/images/icone_trash.png"} alt={"Excluir"} width={20} height={20} priority />
                                                </button> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="submit" aria-label="Registrar venda" onClick={openModalVendaRegistrada} className={styles.btnVenda}>Registrar venda</button>
                        </div>
                    </div>
                </div>
            </main>

            {showModalExcluir && <ExcluirProduto closeModalExcluir={closeModalExcluir} />}
            {showModalVendaRegistrada && <VendaRegistrada closeModalVendaRegistrada={closeModalVendaRegistrada} />}

            <footer></footer>
        </div>
    );
}
